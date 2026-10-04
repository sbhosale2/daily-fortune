import { SectionLabel } from '@/components/what-it-is'

const steps = [
  {
    title: 'Mood board',
    body: '8 annotated reference images.',
  },
  {
    title: 'The “Sunlit Quiet Luxury” design brief',
    body: 'Fired clay, ivory, Cormorant Garamond.',
  },
  {
    title: 'Four phone mockups',
    body: 'Today’s Fortune, Collection, Moods, Share.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionLabel>How it was made</SectionLabel>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-primary pt-6">
              <span className="font-serif text-5xl text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-medium leading-snug text-balance">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
