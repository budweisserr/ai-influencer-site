import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">
      <Hero />
      <Trust />
      <Gallery />
      <Features />
      <Pricing />
      
      <footer className="border-t border-zinc-100 py-10 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} AI Influencer Academy. All rights reserved.
      </footer>
    </main>
  );
}