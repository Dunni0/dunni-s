export default function About() {
  return (
    <section id="about" className="has-stars">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tab">get to know me</span>
          <h2>About me <span className="emo">👋</span></h2>
        </div>

        <div className="journey reveal">
          <h3>📖 My journey</h3>
          <p>My journey began with a background in <span className="hl">philosophy</span>, where I learned to think clearly, ask the right questions, and break complex ideas down to their core. Out of pure curiosity, I found myself drawn into software development, wanting to understand how abstract ideas become real products people can see and use.</p>
          <p>Today, I work as a <b>frontend developer</b>, building responsive, high-performing web applications with <b>JavaScript, React.js, and modern UI frameworks</b>. I collaborate closely with designers, product managers, and engineers to deliver interfaces that improve usability, efficiency, and business outcomes. Clean, testable code is central to how I work.</p>
          <p>I'm currently extending into backend development by learning <span className="hl">MongoDB</span>, expanding my understanding of data and system design. Beyond writing code, I'm passionate about impact — through my tech sessions within <b>Tech DP · Afara</b> I've facilitated several learning sessions. I'm driven by curiosity, continuous learning, and the desire to build meaningful digital experiences that create real impact.</p>
        </div>

        <div className="sec-head reveal" style={{ marginTop: '56px', marginBottom: 0 }}>
          <span className="tab">what I care about</span>
          <h2>Core values <span className="emo">🎯</span></h2>
          <div className="values reveal stagger">
            {['Clean code', 'User-centric design', 'Continuous learning', 'Technical excellence', 'Problem solving', 'Team leadership'].map(v => (
              <span key={v}>{v}</span>
            ))}
          </div>
        </div>

        <div className="quote reveal">
          <svg className="deco q1" viewBox="0 0 120 120" fill="none" aria-hidden="true"><circle cx="60" cy="60" r="55" stroke="#fff" strokeWidth="4" strokeDasharray="10 10" /></svg>
          <svg className="deco q2" viewBox="0 0 140 140" fill="none" aria-hidden="true"><path d="M10 100 C 40 30, 90 30, 130 70" stroke="#fff" strokeWidth="5" strokeLinecap="round" /></svg>
          <p>"Build with clarity, stay curious, and write code that serves people before systems."</p>
          <span className="by">— my development philosophy</span>
        </div>
      </div>
    </section>
  )
}
