import './styles/main.scss'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Process from './components/Process/Process'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Projects from './components/Projects/Projects'
import CtaFinal from './components/CtaFinal/CtaFinal'
import Reservation from './components/Reservation/Reservation'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <Projects />
      <CtaFinal />
      <Reservation />
      <Footer />
    </>
  )
}
