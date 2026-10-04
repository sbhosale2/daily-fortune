import { Sunrise, Heart, Send } from 'lucide-react'

const features = [
  {
    icon: Sunrise,
    title: 'One card every morning',
    body: 'A single, beautifully designed fortune card arrives each day.',
  },
  {
    icon: Heart,
    title: 'Collect your favorites',
    body: 'Save the fortunes that stick with you and build your own collection.',
  },
  {
    icon: Send,
    title: 'Share the unhinged ones',
    body: 'Send the strangest fortunes straight to your friends.',
  },
]

export function WhatItIs() {
  return (
    <section id="what" className="scroll-mt-20 border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <SectionLabel>What it is</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-balance md:text-4xl">
          A small daily ritual, delivered as a card.
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rounded-2xl border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">{children}</p>
  )
}
