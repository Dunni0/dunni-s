const books = [
  {
    title: 'Stay With Me',
    author: 'Ayòbámi Adébáyò',
    hue: 'periwinkle',
  },
  {
    title: 'Tomorrow I Become a Woman',
    author: 'Aiwanose Odafen',
    hue: 'coral',
  },
  {
    title: 'Me Before You',
    author: 'Jojo Moyes',
    hue: 'mint',
  }
]

export default function Books() {
  return (
    <section id="books" className="has-stars">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tab">off-screen</span>
          <h2>On my shelf this year <span className="emo">📚</span></h2>
          <p>A couple of reads worth the mention.</p>
        </div>

        <div className="book-stack reveal stagger">
          {books.map(b => (
            <div className={`spine spine-${b.hue}`} key={b.title}>
              <span className="spine-title">{b.title}</span>
              <span className="spine-author">{b.author}</span>
            </div>
          ))}
          <div className="spine spine-next" aria-hidden="true">
            <span className="spine-next-label">next up &#8230;</span>
          </div>
        </div>
      </div>
    </section>
  )
}