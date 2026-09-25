import { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Education from './components/Education'
import Books from './components/Books'

export default function App() {
  const progressRef = useRef(null)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    // reveal on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))

    // scroll progress bar
    const bar = progressRef.current
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      bar.style.transform = 'scaleX(' + (max > 0 ? scrollY / max : 0) + ')'
    }
    addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // active nav link
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
    }, { rootMargin: '-40% 0px -55% 0px' })
    document.querySelectorAll('section[id]').forEach(s => spy.observe(s))

    return () => {
      io.disconnect()
      spy.disconnect()
      removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <div className="progress" ref={progressRef} aria-hidden="true" />
      <Nav activeSection={activeSection} />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Education />
      <Books />
      <Contact />
      <footer>
        {/* <span className="accent">Dunni</span> — built with React &amp; Vite */}
      </footer>
    </>
  )
}
