import { ArrowUpRight } from 'lucide-react'
import { project } from '@/lib/project'
import { cn } from '@/lib/utils'

export function ProjectLink({ variant = 'primary' }: { variant?: 'primary' | 'inverse' }) {
  const base =
    'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-opacity'
  const styles =
    variant === 'primary'
      ? 'bg-primary text-primary-foreground'
      : 'bg-primary-foreground text-primary'

  if (!project.handshakeUrl) {
    return (
      <span
        className={cn(base, styles, 'cursor-not-allowed')}
        aria-disabled="true"
        title="Handshake profile link coming soon"
      >
        View on Handshake
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </span>
    )
  }

  return (
    <a
      href={project.handshakeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, styles, 'hover:opacity-90')}
    >
      View on Handshake
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  )
}
