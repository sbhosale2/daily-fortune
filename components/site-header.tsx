import { project } from '@/lib/project'

const links = [
  { href: '#what', label: 'What it is' },
  { href: '#process', label: 'Process' },
  { href: '#why', label: 'Why it matters' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-lg font-medium text-primary">
          {project.name}
        </a>
        <nav aria-label="Sections">
          <ul className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
