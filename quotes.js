let quotes = [
  {
    quote: `If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.`,
    author: 'Nikola Tesla',
  },
  {
    quote: `If you want to find the secrets of the universe, think in terms of energy, frequency and vibration`,
    author: 'Nikola Tesla',
  },
  {
    quote: `I don't care that they stole my idea . . I care that they don't have any of their own`,
    author: 'Nikola Tesla',
  },
  {
    quote: `Of all things, I liked books best`,
    author: 'Nikola Tesla',
  },
  {
    quote: `The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane`,
    author: 'Nikola Tesla',
  },
]
const quoteContainer = document.querySelector('.quote-container');
// const ment = quoteContainer.querySelector('p');
// const author = quoteContainer.querySelector('h5');
getQuotes()

function getQuotes() {
  let quoteIndex = Math.round(Math.random() * quotes.length)
  const h4 = document.createElement('h4');
  const p = document.createElement('p');
  h4.innerText = `${quotes[quoteIndex].quote}`
  p.innerText = `- ${quotes[quoteIndex].author} -`
  quoteContainer.appendChild(h4);
  quoteContainer.appendChild(p);
}
