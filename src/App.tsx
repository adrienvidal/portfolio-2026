import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import Lab from './pages/Lab/Lab'
import Blog from './pages/Blog/Blog'
import Article from './pages/Article/Article'

function Home() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
      </Routes>
    </BrowserRouter>
  )
}
