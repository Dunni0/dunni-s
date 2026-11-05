export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-layout">
        <svg className="float-doodle star1" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="currentColor" /></svg>
        <svg className="float-doodle star2" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="currentColor" /></svg>
        <svg className="float-doodle squiggle" viewBox="0 0 60 20" fill="none" aria-hidden="true"><path d="M2 14 C 10 2, 18 2, 22 10 C 26 18, 34 18, 38 10 C 42 2, 50 2, 58 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
        <svg className="float-doodle star3" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="currentColor" /></svg>
        <svg className="float-doodle star4" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="currentColor" /></svg>

        <div className="hero-copy">
          <span className="hero-kicker">Oluwapelumi <span aria-hidden="true">/</span> Frontend developer</span>
          <h1>
            I make the web feel a little <span className="doodle-word">easier to use
              <svg viewBox="0 0 200 20" fill="none" aria-hidden="true">
                <path d="M3 14 C 40 2, 70 18, 100 8 C 130 -2, 165 16, 197 6" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>.
          </h1>
          <p className="lede">
            I studied philosophy before finding my way into frontend development. These days, I build thoughtful, responsive interfaces with React and Next.js — and keep asking how to make them clearer for the people using them.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#work">Take a look at my work <span aria-hidden="true">↘</span></a>
            <a className="btn btn-ghost" href="mailto:petunmiladunni3@gmail.com">Say hello</a>
          </div>
          <p className="hero-footnote"><span aria-hidden="true">✳</span> Currently building at ChurchPad</p>
        </div>

        <aside className="hero-note" aria-label="A note about how I work">
          <span className="note-label">A little about how I work</span>
          <p>“A philosophy degree turned out to be useful: I ask questions before I open the editor.”</p>
          <svg viewBox="0 0 180 24" fill="none" aria-hidden="true">
            <path d="M3 17 C 42 4, 76 22, 111 11 C 139 2, 157 12, 177 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="note-divider" />
          <div className="hero-credits">
            <div><span>Now</span><strong>Frontend Developer</strong><small>ChurchPad</small></div>
            <div><span>Before</span><strong>Frontend Developer Intern</strong><small>Figorr</small></div>
          </div>
        </aside>
      </div>
    </header>
  )
}
