"use client";

import { useState } from "react";

export default function Pricing() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan: "basic" }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert(error instanceof Error ? error.message : "Failed to start checkout. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-lg rounded-3xl border border-zinc-200 bg-zinc-900 p-8 text-center text-white shadow-2xl dark:border-zinc-800 dark:bg-black md:p-12">
          <h2 className="text-2xl font-bold">Lifetime Access</h2>
          <div className="my-6 flex items-baseline justify-center gap-2">
            <span className="text-5xl font-extrabold tracking-tight">$49</span>
            <span className="text-lg text-zinc-500 line-through">$199</span>
          </div>
          
          <ul className="mb-8 space-y-4 text-left text-zinc-300">
            {["6 Video Modules", "Prompt Library PDF", "Private Discord Access", "Lifetime Updates"].map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <button
            onClick={handleCheckout}
            disabled={isLoading}
            className="block w-full rounded-full bg-white py-4 text-center font-bold text-black transition-transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? "Loading..." : "Join the Program"}
          </button>
          <p className="mt-4 text-xs text-zinc-500">
            One-time payment. Secure checkout via Stripe.
          </p>
        </div>
      </div>
    </section>
  );
}