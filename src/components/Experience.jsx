const jobs = [
  {
    title: 'Frontend Developer',
    company: 'ChurchPad', period: 'December 2024 — present', location: 'Columbia, Maryland',
    intro: "Own and drive frontend delivery on ChurchPad's React/Next.js/TypeScript platform for church management — Admin dashboard, User Portal, Cobalt, Tap, and Echo.",
    bullets: [
      'Own the hardware ordering feature end-to-end, from cart and checkout logic to business-rule enforcement (locked orders, quantity limits) and subscription-based access gating; improved search performance on large device inventories by moving filtering from client-side to server-side.',
      'Led development of an identity-merge feature that lets admins safely consolidate duplicate member and guest records, resolving data-display and aggregation bugs that had been undermining confidence in the tool.',
      'Built reporting and guest-management tools, giving church admins clearer visibility into donor and membership data through improved data tables and record-editing flows.',
      'Designed and built a secure, multi-step account management flow, including authentication, token handling, and a re-verification step before account deletion, to protect sensitive user actions.',
      'Built functional landing pages across the management app to support product marketing and onboarding.',
      'Wrote Playwright test coverage for key modules to catch regressions before release, and improved overall system efficiency by 15% through module consolidation and targeted performance and UX fixes.',
      'Led a two-person team to design and standardise responsive email templates, ensuring consistent brand alignment across communication platforms.',
      'Collaborated closely with product and cross-functional teams to align technical solutions with business and operational requirements, ensuring high-impact deliverables.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Figorr', period: 'May 2024 - October 2024', location: 'Lagos, Nigeria',
    bullets: [
      'Built and maintained performant, reusable Vue 2 interfaces with a strong focus on consistency.',
      'Proactively fixed critical bugs before production, increasing system reliability by 30%.',
      'Worked closely with backend and UI/UX teams to deliver user-centred frontend solutions.',
      'Improved testing, documentation and deployment workflows, reducing delivery time by 25%.',
      'Delivered accurate, real-time data visualisations through intuitive dashboards to support better decision-making.',
      'Proposed and implemented frontend enhancements that expanded functionality and increased user satisfaction by 20%.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="has-stars">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tab">career so far</span>
          <h2>Where I've worked <span className="emo">🌱</span></h2>
          <p>2+ years of progressive experience building and scaling modern web interfaces in real-world production environments.</p>
        </div>
        <div className="timeline reveal">
          {jobs.map(j => (
            <div className="job" key={j.title}>
              <h3>{j.title}</h3>
              <div className="meta">
                <span className="co">{j.company}</span>
                <span>{j.period}</span>
                {j.location && <span>{j.location}</span>}
              </div>
              {j.intro && <p className="job-intro">{j.intro}</p>}
              <ul>{j.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
