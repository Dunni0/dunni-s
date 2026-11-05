import { useState, useRef, useEffect } from 'react'

export default function Nav({ activeSection }) {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const links = ['about', 'work', 'skills', 'experience', 'education', 'books', 'contact']

  useEffect(() => {
    const update = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          '--nav-h', navRef.current.offsetHeight + 'px'
        )
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = (e) => {
      if (
        !navRef.current?.contains(e.target) &&
        !menuRef.current?.contains(e.target)
      ) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <>
      <nav ref={navRef}>
        <div className="wrap">
          <a className="brand" href="#top" aria-label="Oluwapelumi, back to top"><span className="dot" />OA<span className="brand-period">.</span></a>
          <div className="nav-links">
            {links.map(l => (
              <a key={l} href={`#${l}`} className={activeSection === l ? 'active' : ''}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            ))}
          </div>
          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu" ref={menuRef}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l}`}
              className={activeSection === l ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
