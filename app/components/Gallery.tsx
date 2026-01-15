export default function Gallery() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Consistent Characters. <br/>
            <span className="text-zinc-500">Zero Photography.</span>
          </h2>
        </div>
        
        {/* Grid of Results */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="aspect-[9/16] w-full transform rounded-2xl bg-zinc-200 transition-transform hover:scale-105 dark:bg-zinc-800"></div>
          <div className="aspect-[9/16] w-full transform rounded-2xl bg-zinc-300 transition-transform hover:scale-105 dark:bg-zinc-700 md:mt-12"></div>
          <div className="aspect-[9/16] w-full transform rounded-2xl bg-zinc-200 transition-transform hover:scale-105 dark:bg-zinc-800"></div>
          <div className="aspect-[9/16] w-full transform rounded-2xl bg-zinc-300 transition-transform hover:scale-105 dark:bg-zinc-700 md:mt-12"></div>
        </div>
        
        <p className="mt-8 text-center text-sm text-zinc-500">
          All images above were 100% AI generated using the techniques in this course.
        </p>
      </div>
    </section>
  );
}