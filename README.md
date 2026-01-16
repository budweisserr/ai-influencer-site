# AI Influencer Course Landing Page

A modern, responsive landing page for an AI Influencer course built with Next.js 16, Tailwind CSS v4, and Stripe integration.

## Features

- 🎨 **Modern UI** - Beautiful, responsive design with dark mode support
- 💳 **Stripe Checkout** - Integrated payment processing via Stripe API
- ⚡ **Next.js 16** - Built with the latest App Router and React Server Components
- 🎭 **Tailwind CSS v4** - Styled with Tailwind CSS v4 and custom theme configuration
- 📱 **Fully Responsive** - Mobile-first design that works on all devices

## Project Structure

```
app/
├── api/
│   └── checkout/
│       └── route.ts          # Stripe checkout API endpoint
├── components/
│   ├── Hero.tsx              # Hero section with CTA
│   ├── Trust.tsx             # Social proof section
│   ├── Gallery.tsx           # Image gallery showcase
│   ├── Features.tsx          # Course curriculum features
│   └── Pricing.tsx           # Pricing card component
├── success/
│   └── page.tsx              # Success page after payment
├── globals.css               # Global styles and Tailwind config
├── layout.tsx                # Root layout
└── page.tsx                  # Home page

```

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Payment**: Stripe API
- **React**: 19.2.3

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account (for payment processing)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-influencer-site
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:

```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PRICE_BASIC=price_...
STRIPE_PRICE_DEEP=price_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=whsec_...
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=noreply@yourdomain.com
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `STRIPE_SECRET_KEY` | Your Stripe secret key | Yes |
| `STRIPE_PRICE_BASIC` | Stripe price ID for basic plan | Yes |
| `STRIPE_PRICE_DEEP` | Stripe price ID for deep plan | Yes |
| `NEXT_PUBLIC_BASE_URL` | Base URL of your application | Yes |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret | Yes (for emails) |
| `RESEND_API_KEY` | Resend API key for sending emails | Yes (for emails) |
| `RESEND_FROM_EMAIL` | Email address to send from (must be verified in Resend) | Yes (for emails) |

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Components

### Hero
Main landing section with headline, CTA buttons, and social proof.

### Trust
Displays platform logos (TikTok, Instagram, Midjourney, Fanvue) for credibility.

### Gallery
Showcases AI-generated images in a responsive grid layout.

### Features
Lists the 6-course curriculum modules with descriptions.

### Pricing
Pricing card with Stripe checkout integration.

## API Routes

### POST `/api/checkout`
Creates a Stripe checkout session.

**Request Body:**
```json
{
  "plan": "basic" | "deep"
}
```

**Response:**
```json
{
  "url": "https://checkout.stripe.com/..."
}
```

### POST `/api/webhooks/stripe`
Stripe webhook endpoint for handling payment events. Automatically sends welcome emails to customers after successful payment.

**Events Handled:**
- `checkout.session.completed` - Sends welcome email with course access information

## Email Setup

The application automatically sends welcome emails to customers after successful payment using Resend.

### Setup Steps:

1. **Create a Resend account** at [resend.com](https://resend.com)
2. **Get your API key** from the Resend dashboard
3. **Verify your domain** or use the default `onboarding@resend.dev` for testing
4. **Add environment variables:**
   - `RESEND_API_KEY` - Your Resend API key
   - `RESEND_FROM_EMAIL` - Verified email address (e.g., `noreply@yourdomain.com`)

### Stripe Webhook Configuration:

1. **Go to Stripe Dashboard** → Developers → Webhooks
2. **Add endpoint:** `https://yourdomain.com/api/webhooks/stripe`
3. **Select events to listen to:**
   - `checkout.session.completed`
4. **Copy the webhook signing secret** and add it as `STRIPE_WEBHOOK_SECRET` in your environment variables

### Local Development:

For local testing, use [Stripe CLI](https://stripe.com/docs/stripe-cli):

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

This will give you a webhook signing secret starting with `whsec_` - use this as `STRIPE_WEBHOOK_SECRET` in your `.env.local`.

## Styling

The project uses Tailwind CSS v4 with:
- Custom color scheme (zinc palette)
- Dark mode support via `prefers-color-scheme`
- Custom theme variables for consistent theming
- Responsive utilities for mobile-first design

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

## License

Private project - All rights reserved.
