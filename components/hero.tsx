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
          <p className="mt-5 text-sm font-medium text-primary">
            Now on GitHub — see how this site was built.
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
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
    <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-[18rem] md:mx-0 md:mr-8 lg:mr-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-10 translate-y-3 rotate-[3deg] rounded-3xl border border-primary/20 bg-muted shadow-[0_20px_50px_-25px_rgba(150,83,53,0.45)] md:translate-x-14"
      />
      <figure className="relative flex aspect-[3/4] w-full rotate-[2deg] flex-col justify-between rounded-3xl bg-primary p-7 text-primary-foreground shadow-[0_30px_80px_-30px_rgba(150,83,53,0.6)] md:p-8">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/80">
          <span>Daily Fortune</span>
          <span>Today</span>
        </div>
        <blockquote className="font-serif text-2xl font-medium leading-tight text-balance md:text-3xl">
          It turns a small daily ritual into something beautiful.
        </blockquote>
        <figcaption className="border-t border-primary-foreground/30 pt-5 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/80">
          One card, every morning
        </figcaption>
      </figure>
    </div>
  )
}
