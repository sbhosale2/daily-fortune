import { project } from '@/lib/project'
import { ProjectLink } from '@/components/project-link'

export function Hero() {
  return (
    <section id="top" className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-20 px-6 pb-24 pt-14 md:flex-row md:gap-12 md:pb-32 md:pt-20">
        <div className="flex-1">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary md:text-sm">
            A project by {project.author}
          </p>
          <h1 className="mt-6 font-serif text-6xl font-medium leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            {project.name}
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Daily Fortune delivers one beautifully designed fortune card every
            morning — collect your favorites and share the unhinged ones with
            friends.
          </p>
          <div className="mt-10">
            <ProjectLink />
          </div>
        </div>

        <FortuneCard />
      </div>
    </section>
  )
}

function FortuneCard() {
  return (
    <div className="relative mx-auto w-full max-w-xs flex-1 sm:max-w-sm">
      <div
        aria-hidden="true"
        className="absolute inset-0 -rotate-6 rounded-3xl border border-border bg-muted"
      />
      <figure className="relative flex aspect-[3/4] w-full rotate-3 flex-col justify-between rounded-3xl bg-primary p-8 text-primary-foreground shadow-[0_30px_80px_-30px_rgba(150,83,53,0.6)] md:p-10">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/80">
          <span>Daily Fortune</span>
          <span>Today</span>
        </div>
        <blockquote className="font-serif text-3xl font-medium leading-tight text-balance md:text-4xl">
          It turns a small daily ritual into something beautiful.
        </blockquote>
        <figcaption className="border-t border-primary-foreground/30 pt-5 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/80">
          One card, every morning
        </figcaption>
      </figure>
    </div>
  )
}
