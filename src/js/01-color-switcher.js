const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
startBtn.addEventListener('click', startEpilepcy);
stopBtn.addEventListener('click', stopEpilepcy);
stopBtn.setAttribute('disabled', 'true');

body.insertAdjacentHTML('beforeEnd', '<h2> код кольору:<span ></span> </h2>');

let temp;

function startEpilepcy() {
  let currentColor;
  const idInt = setInterval(() => {
    currentColor = getRandomHexColor();
    body.style.backgroundColor = currentColor;
    body.lastElementChild.lastChild.textContent = ` ${currentColor}`
  }, 1000);
  temp = idInt;
  currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  body.lastElementChild.lastChild.textContent = ` ${currentColor}`
  startBtn.toggleAttribute('disabled');
  stopBtn.toggleAttribute('disabled');
}

function stopEpilepcy() {
  clearInterval(temp);
  startBtn.toggleAttribute('disabled');
  stopBtn.toggleAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
