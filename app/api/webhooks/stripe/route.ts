import Stripe from "stripe";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

const resend = new Resend(process.env.RESEND_API_KEY);

// Disable body parsing, we need the raw body for webhook signature verification
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "No signature provided" },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      console.error("STRIPE_WEBHOOK_SECRET is not set");
      return NextResponse.json(
        { error: "Webhook secret not configured" },
        { status: 500 }
      );
    }

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    // Handle the event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // Retrieve the full session to get customer email
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ["customer", "line_items"],
      });

      const customerEmail = fullSession.customer_details?.email;
      const customerName = fullSession.customer_details?.name || "there";

      if (!customerEmail) {
        console.error("No customer email found in session");
        return NextResponse.json(
          { error: "No customer email" },
          { status: 400 }
        );
      }

      // Send welcome email
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
          to: customerEmail,
          subject: "Welcome to AI Influencer Academy! 🎉",
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                  <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to AI Influencer Academy!</h1>
                </div>
                
                <div style="background: #ffffff; padding: 40px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
                  <p style="font-size: 18px; margin-top: 0;">Hi ${customerName},</p>
                  
                  <p>Thank you for your purchase! We're excited to have you join our community of AI creators.</p>
                  
                  <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 30px 0;">
                    <h2 style="margin-top: 0; color: #1f2937;">What's Next?</h2>
                    <ul style="padding-left: 20px;">
                      <li style="margin-bottom: 10px;">Check your email for access to the course materials</li>
                      <li style="margin-bottom: 10px;">Join our private Discord community</li>
                      <li style="margin-bottom: 10px;">Download the prompt library PDF</li>
                      <li style="margin-bottom: 10px;">Start with Module 1: Niche Selection</li>
                    </ul>
                  </div>
                  
                  <div style="text-align: center; margin: 30px 0;">
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com"}" 
                       style="display: inline-block; background: #2563eb; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                      Access Your Course
                    </a>
                  </div>
                  
                  <p style="color: #6b7280; font-size: 14px; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    If you have any questions, just reply to this email. We're here to help!
                  </p>
                  
                  <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
                    Best regards,<br>
                    The AI Influencer Academy Team
                  </p>
                </div>
              </body>
            </html>
          `,
        });

        console.log(`Welcome email sent to ${customerEmail}`);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't fail the webhook if email fails - log it and continue
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
