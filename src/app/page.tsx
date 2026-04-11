import type { Metadata } from 'next'
import Nav from '@/components/Nav/Nav'
import Hero from '@/components/Hero/Hero'
import Clients from '@/components/Clients/Clients'
import Services from '@/components/Services/Services'
import Process from '@/components/Process/Process'
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects'
import CtaFinal from '@/components/CtaFinal/CtaFinal'
import Reservation from '@/components/Reservation/Reservation'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Adrien Vidal — Développeur Web Freelance',
  description: 'Adrien conçoit des landing pages React / Next premium orientées conversion avec IA, UX et exécution rapide. Parlons de votre projet.',
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Clients />
      <Services />
      <Process />
      <About />
      <Projects />
      <CtaFinal />
      <Reservation />
      <Footer />
    </>
  )
}
