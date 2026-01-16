import Stripe from "stripe";
import { NextResponse } from "next/server";

// Validate environment variables at startup
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_PRICE_BASIC = process.env.STRIPE_PRICE_BASIC;
const STRIPE_PRICE_DEEP = process.env.STRIPE_PRICE_DEEP;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY environment variable is not set");
}

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2025-12-15.clover",
});

export async function POST(req: Request) {
  try {
    // Validate request body
    const body = await req.json();
    const { plan } = body;

    if (!plan || (plan !== "basic" && plan !== "deep")) {
      return NextResponse.json(
        { error: "Invalid plan. Must be 'basic' or 'deep'" },
        { status: 400 }
      );
    }

    // Validate environment variables
    const priceId = plan === "basic" ? STRIPE_PRICE_BASIC : STRIPE_PRICE_DEEP;

    if (!priceId) {
      return NextResponse.json(
        { error: `Stripe price ID for plan '${plan}' is not configured` },
        { status: 500 }
      );
    }

    if (!BASE_URL) {
      return NextResponse.json(
        { error: "NEXT_PUBLIC_BASE_URL is not configured" },
        { status: 500 }
      );
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${BASE_URL}/success`,
      cancel_url: `${BASE_URL}/`,
      customer_email: undefined, // Let Stripe collect email during checkout
      metadata: {
        plan: plan,
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Failed to create checkout session" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
