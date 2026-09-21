const skillGroups = [
  {
    title: 'Frontend',
    items: ['JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive design', 'UI/UX principles', 'Styled components', 'Playwright testing'],
  },
  {
    title: 'Database & storage',
    items: ['MongoDB'],
  },
  {
    title: 'Practices',
    items: ['Agile / Scrum', 'Test-driven development', 'Code review', 'Technical leadership', 'Solution architecture', 'Performance optimisation'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="has-stars">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tab">technical expertise</span>
          <h2>Skills &amp; technologies <span className="emo">💻</span></h2>
          <p>Modern web development, from interface to infrastructure.</p>
        </div>
        <div className="skills reveal stagger">
          {skillGroups.map(g => (
            <div className="skill-card" key={g.title}>
              <h3><span className="pin" />{g.title}</h3>
              <ul>{g.items.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
