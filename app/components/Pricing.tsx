export default function Pricing() {
  // You will replace these with your actual Stripe Payment Links
  const BASIC_LINK = "https://buy.stripe.com/your-basic-link-id";
  const ADVANCED_LINK = "https://buy.stripe.com/your-advanced-link-id";

  const tiers = [
    {
      name: 'Starter Course',
      id: 'tier-basic',
      href: BASIC_LINK,
      price: '$10',
      description: 'The essentials to create your first AI character.',
      features: [
        'Midjourney Prompting Basics',
        'Character Consistency Guide',
        '3 Video Lessons',
        'Standard Quality Export Settings',
      ],
      featured: false,
    },
    {
      name: 'Empire Bundle',
      id: 'tier-advanced',
      href: ADVANCED_LINK,
      price: '$25',
      description: 'Everything you need to go viral and monetize.',
      features: [
        'Everything in Starter',
        'Deepfake & Voice Cloning Workflows',
        'Viral TikTok Script Templates',
        'Brand Deal Outreach Scripts',
        '6 Video Lessons + PDF Resources',
        'Lifetime Updates',
      ],
      featured: true, // This makes it pop visually
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Choose your path
          </p>
        </div>
        
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Start small or go all-in. Both plans include instant access.
        </p>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={`
                relative rounded-3xl p-8 ring-1 ring-zinc-200 dark:ring-zinc-800 sm:p-10
                ${tier.featured ? 'bg-zinc-900 text-white shadow-2xl scale-105 z-10 dark:bg-zinc-900 dark:ring-zinc-700' : 'bg-white/60 dark:bg-zinc-950/50 sm:mx-8 lg:mx-0'}
                ${tier.featured ? '' : 'lg:rounded-t-none lg:rounded-bl-3xl lg:rounded-br-none lg:rounded-tr-none lg:border-r-0'} 
              `}
            >
              <h3
                id={tier.id}
                className={`text-base font-semibold leading-7 ${tier.featured ? 'text-blue-400' : 'text-blue-600'}`}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className={`text-5xl font-bold tracking-tight ${tier.featured ? 'text-white' : 'text-zinc-900 dark:text-white'}`}>
                  {tier.price}
                </span>
                <span className={`text-base text-zinc-500`}>/one-time</span>
              </p>
              <p className={`mt-6 text-base leading-7 ${tier.featured ? 'text-zinc-300' : 'text-zinc-600 dark:text-zinc-400'}`}>
                {tier.description}
              </p>
              <ul
                role="list"
                className={`mt-8 space-y-3 text-sm leading-6 ${tier.featured ? 'text-zinc-300' : 'text-zinc-600 dark:text-zinc-400'}`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg className={`h-6 w-5 flex-none ${tier.featured ? 'text-blue-400' : 'text-blue-600'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={`mt-8 block rounded-full px-3 py-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all hover:scale-105 active:scale-95
                  ${tier.featured 
                    ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500 focus-visible:outline-blue-600' 
                    : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 ring-1 ring-inset ring-zinc-200 dark:ring-transparent'
                  }`}
              >
                Get Access
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}