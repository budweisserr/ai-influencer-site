export default function Trust() {
    return (
      <section className="border-y border-zinc-100 bg-zinc-50/50 py-12 dark:border-zinc-800 dark:bg-zinc-900/20">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-8 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Master the platforms that matter
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 md:gap-24">
             {/* TikTok-ish Logo */}
             <div className="flex items-center gap-2 text-xl font-bold text-black dark:text-white">
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
               TikTok
             </div>
  
             {/* Instagram-ish Logo */}
             <div className="flex items-center gap-2 text-xl font-bold text-black dark:text-white">
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M19,5A1,1 0 0,1 20,6A1,1 0 0,1 19,7A1,1 0 0,1 18,6A1,1 0 0,1 19,5Z"/></svg>
               Instagram
             </div>
  
             {/* Midjourney Text */}
             <div className="text-xl font-bold tracking-widest text-black dark:text-white">
               MIDJOURNEY
             </div>
  
             {/* Fanvue Text */}
             <div className="text-xl font-bold text-blue-500">
               Fanvue
             </div>
          </div>
        </div>
      </section>
    );
  }