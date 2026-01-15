export default function Success() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-md">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <svg
                className="h-8 w-8 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="mb-4 text-4xl font-bold">Payment Successful</h1>
            <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
              Check your email for access instructions.
            </p>
            <a
              href="/"
              className="inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Return Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
