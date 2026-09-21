export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-inner">
        <svg className="float-doodle star1" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="currentColor" /></svg>
        <svg className="float-doodle star2" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="currentColor" /></svg>
        <svg className="float-doodle squiggle" viewBox="0 0 60 20" fill="none" aria-hidden="true"><path d="M2 14 C 10 2, 18 2, 22 10 C 26 18, 34 18, 38 10 C 42 2, 50 2, 58 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
        <svg className="float-doodle star3" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="currentColor" /></svg>
        <svg className="float-doodle star4" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="currentColor" /></svg>

        <span className="hero-kicker">hi, I'm</span>
        <h1>
          Oluwapelumi, a frontend developer who{' '}
          <span className="doodle-word">
            thinks in code
            <svg viewBox="0 0 200 20" fill="none" aria-hidden="true">
              <path d="M3 14 C 40 2, 70 18, 100 8 C 130 -2, 165 16, 197 6" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p className="lede">
          I studied philosophy, then decided building things beats just arguing about them. Now I build interfaces people actually enjoy using — mostly in React and Next.js, with a growing soft spot for the backend.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#work">See my work</a>
          <a className="btn btn-ghost" href="#contact">Say hello</a>
        </div>
      </div>
    </header>
  )
}
