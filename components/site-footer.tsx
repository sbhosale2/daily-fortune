import { project } from '@/lib/project'
import { ProjectLink } from '@/components/project-link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Made by</p>
          <p className="mt-1 font-serif text-2xl font-medium">{project.author}</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <p className="text-sm text-muted-foreground">See it or read more</p>
          <ProjectLink />
        </div>
      </div>
    </footer>
  )
}
