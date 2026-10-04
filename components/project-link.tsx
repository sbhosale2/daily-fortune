import { ArrowUpRight } from 'lucide-react'
import { project } from '@/lib/project'

export function ProjectLink() {
  return (
    <a
      href={project.handshakeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      View on Handshake
      <ArrowUpRight className="size-4" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}
