"use client";

import { useState } from "react";

export default function Hero() {
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
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32">
      <div className="container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
          Updated for 2026 Algorithms
        </div>
        
        {/* Headline */}
        <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-7xl">
          Build an AI Influencer <br />
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Empire from Scratch
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          The step-by-step blueprint to creating consistent, hyper-realistic AI models that generate revenue on TikTok and Instagram.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={handleCheckout}
            disabled={isLoading}
            className="w-full rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {isLoading ? "Loading..." : "Start Learning — $49"}
          </button>
          <a
            href="#features"
            className="w-full rounded-full border border-zinc-200 bg-white px-8 py-4 text-lg font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900 sm:w-auto"
          >
            View Curriculum
          </a>
        </div>

        {/* Social Proof Text */}
        <div className="mt-12 text-sm text-zinc-500">
          Trusted by 1,400+ creators • Instant Access
        </div>
      </div>
    </section>
  );
}