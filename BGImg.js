const body = document.querySelector('body');

const img = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg']

randomBg();

function randomBg() {
  let randomIndex = Math.floor(Math.random() * img.length);
  body.style.background = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('IMG/${img[randomIndex]}')`;
  body.style.backgroundSize = `cover`;
  body.style.backgroundPosition = `center`;
  body.style.backgroundRepeat = `no-repeat`;
  
}
