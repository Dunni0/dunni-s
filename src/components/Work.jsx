const projects = [
  {
    title: 'ChurchPad', tag: 'work',
    desc: 'Collaborated across product and engineering teams to deliver and launch scalable web features, improving system performance by consolidating redundant modules.',
    stack: ['React', 'Redux', 'Tailwind CSS', 'REST APIs'],
  },
  {
    title: 'Figorr', tag: 'work',
    desc: 'Built and maintained performant Vue 2 interfaces for real-time cold chain monitoring, working with cross-functional teams to deliver user-focused features.',
    stack: ['Vue 2', 'RESTful APIs'],
  },
  {
    title: 'Note Taking App', tag: 'side project',
    desc: 'A full-stack Next.js note-taking application backed by MongoDB — user authentication, tagging, and full CRUD operations.',
    stack: ['Next.js', 'React', 'MongoDB'],
    code: 'https://github.com/Dunni0/note-taking-app',
    live: 'https://note-taking-app-two-beta.vercel.app/',
  },
  {
    title: 'Recipe App', tag: 'side project',
    desc: 'Shows random meals with recipes, instructions and ingredients. Users can also add meals to their favourites and search freely.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    code: 'https://github.com/Dunni0/recipe-app',
    live: 'https://recipe-app-one-eta.vercel.app/',
  },
  {
    title: 'Job Tracker', tag: 'side project',
    desc: 'A full-stack Kanban-style job application tracker. Add roles, drag them across stages, and keep the whole search organised in one place.',
    stack: ['Next.js', 'MongoDB', 'React'],
    code: 'https://github.com/Dunni0/job-tracker',
    live: 'https://job-tracker-app-hazel-rho.vercel.app/login',
  },
]

export default function Work() {
  return (
    <section id="work" className="has-stars">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tab">my work</span>
          <h2>Things I've built <span className="emo">🚀</span></h2>
          <p>A handful of projects, from client work to weekend experiments.</p>
        </div>
        <div className="projects reveal stagger">
          {projects.map(p => (
            <div className="card" key={p.title}>
              <div className="card-top">
                <h3>{p.title}</h3>
                <span className="card-tag">{p.tag}</span>
              </div>
              <p className="desc">{p.desc}</p>
              <div className="card-bottom">
                <div className="stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                <div className="card-links">
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noreferrer" className="card-link">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                      Code
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="card-link card-link-live">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
