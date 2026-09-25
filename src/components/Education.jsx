const education = [
  { degree: 'Bachelor of Arts', org: 'University of Lagos', focus: 'Philosophy', tag: 'degree' },
  { degree: 'Diploma', org: 'AltSchool Africa', focus: 'Frontend Engineering', tag: 'diploma' },
  { degree: 'Nanodegree', org: 'Udemy x ALX', focus: 'JavaScript Programming Foundations', tag: 'certificate' },
]

const extracurricular = [
  { role: '(Ex) Mentor', org: 'AltSchool Africa' },
  { role: 'Ambassador', org: 'Cowrywise' },
  { role: 'Frontend Development Facilitator (2x)', org: 'Afara Leadership Centre' },
]

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tab">background</span>
          <h2>Education &amp; involvement <span className="emo">🎓</span></h2>
          <p>Where the philosophy came from, and what I get up to outside the editor.</p>
        </div>

        <div className="edu-grid reveal stagger">
          <div className="edu-col">
            <span className="edu-col-label">Education &amp; certifications</span>
            <div className="edu-list">
              {education.map(e => (
                <div className="edu-row" key={e.degree + e.org}>
                  <span className="edu-dot" aria-hidden="true" />
                  <div className="edu-main">
                    <span className="edu-title">{e.degree} <em className="edu-tag">{e.tag}</em></span>
                    <span className="edu-sub">{e.org} &middot; {e.focus}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="edu-col">
            <span className="edu-col-label">Extracurricular</span>
            <div className="edu-list">
              {extracurricular.map(x => (
                <div className="edu-row" key={x.role + x.org}>
                  <span className="edu-dot" aria-hidden="true" />
                  <div className="edu-main">
                    <span className="edu-title">{x.role}</span>
                    <span className="edu-sub">{x.org}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}