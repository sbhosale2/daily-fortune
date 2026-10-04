import { project } from '@/lib/project'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-sm text-muted-foreground">Made by {project.author}.</p>
      </div>
    </footer>
  )
}
