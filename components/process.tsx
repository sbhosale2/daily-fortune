import { SectionLabel } from '@/components/what-it-is'

const steps = [
  {
    title: 'Mood board',
    body: 'The design started from inspiration — a mood board, not a template.',
  },
  {
    title: 'Design brief',
    body: 'The mood board was distilled into a “Sunlit Quiet Luxury” design brief.',
  },
  {
    title: 'Phone mockups',
    body: 'The brief was brought to life across four phone mockups.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <SectionLabel>The process</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-balance md:text-4xl">
          Designed end-to-end, from mood board to mockup.
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-primary pt-6">
              <span className="font-serif text-4xl text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
