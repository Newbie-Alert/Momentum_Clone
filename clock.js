const clock = document.querySelector('.time');

getTime()
setInterval(getTime, 1000)

function getTime() {
  let time = new Date();
  let hour = (time.getHours()).toString();
  let min = (time.getMinutes()).toString();
  clock.innerText = `${hour.padStart(2,'0')}:${min.padStart(2,'0')}`
}