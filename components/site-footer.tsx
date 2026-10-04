import { project } from '@/lib/project'
import { ProjectLink } from '@/components/project-link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-12 sm:flex-row sm:items-center sm:gap-8">
        <p className="font-serif text-2xl text-foreground">Made by {project.author}.</p>
        <ProjectLink />
      </div>
    </footer>
  )
}
