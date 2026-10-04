import { project } from '@/lib/project'

export function SiteHeader() {
  return (
    <header className="bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="font-serif text-xl font-medium text-foreground">
          {project.name}
        </a>
        <p className="text-sm font-medium text-primary">{project.author}</p>
      </div>
    </header>
  )
}
