import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Process } from '@/components/process'
import { WhyItMatters } from '@/components/why-it-matters'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Process />
        <WhyItMatters />
      </main>
      <SiteFooter />
    </>
  )
}
