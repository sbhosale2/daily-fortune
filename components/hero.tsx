import { project } from '@/lib/project'
import { ProjectLink } from '@/components/project-link'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid items-center gap-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            A project by {project.author}
          </p>
          <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.05] text-balance md:text-7xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            One beautifully designed fortune card every morning — collect your
            favorites and share the unhinged ones with friends.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ProjectLink />
            <a
              href="#process"
              className="text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              See the design process
            </a>
          </div>
        </div>

        <FortuneCard />
      </div>
    </section>
  )
}

function FortuneCard() {
  return (
    <div className="relative mx-auto w-full max-w-xs" aria-hidden="true">
      <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-3xl bg-primary/15" />
      <div className="relative flex aspect-[3/4] flex-col justify-between rounded-3xl border border-primary/20 bg-card p-8 shadow-[0_20px_60px_-20px_rgba(150,83,53,0.35)]">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-primary">
          <span>Daily</span>
          <span className="size-2 rounded-full bg-primary" />
          <span>Fortune</span>
        </div>
        <div className="text-center">
          <div className="mx-auto mb-6 size-14 rounded-full bg-primary/90" />
          <p className="font-serif text-2xl leading-snug text-balance">
            One card, every morning.
          </p>
        </div>
        <div className="h-px w-full bg-primary/20" />
      </div>
    </div>
  )
}
