import { project } from '@/lib/project'
import { ProjectLink } from '@/components/project-link'

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
        <p className="font-serif text-2xl text-foreground">Made by {project.author}.</p>
        <ProjectLink />
      </div>
    </footer>
  )
}
