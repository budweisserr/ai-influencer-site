export default function Features() {
    const curriculum = [
      { title: "Niche Selection", desc: "Finding high-CPM niches that pay well." },
      { title: "Character Design", desc: "Building a consistent seed for Midjourney V6." },
      { title: "Face Swapping", desc: "Professional deepfake workflows for video." },
      { title: "Voice Cloning", desc: "ElevenLabs mastery for realistic speech." },
      { title: "Viral Scripts", desc: "Copy-paste templates for TikTok growth." },
      { title: "Monetization", desc: "Setting up brand deals and digital products." },
    ];
  
    return (
      <section id="features" className="bg-zinc-50 py-24 dark:bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Complete Curriculum
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              From zero to your first sponsorship in 6 modules.
            </p>
          </div>
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {curriculum.map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-500/50 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }