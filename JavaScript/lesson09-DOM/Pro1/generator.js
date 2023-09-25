import Q from "./quotes.json" assert {type: 'json'};;

generateQuote();

function generateQuote() {
  let btn = document.getElementById('new-quote');
  let qte = document.querySelector('.quote');
  let person = document.querySelector('.person');

  const quotes = Object.values(Q);
  btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    qte.textContent = `"${quotes[random.toString()].quote}"`;
    person.textContent = quotes[random.toString()].character;
  })
}
