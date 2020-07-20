const arrows = [...document.querySelectorAll('.arrow')];
const digital = document.querySelector('.digital');
setInterval(() => {
  const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
arrows[0].style.setProperty('--rotate', `${hour*30+minute/2}deg`);
}, 50);

const bigTicks = [...document.querySelectorAll('.tick.big')];
const smallTicks = [...document.querySelectorAll('.tick.small')];
const tinyTicks = [...document.querySelectorAll('.tick.tiny')];
for (let i=0; i<bigTicks.length; i++ ) {
  bigTicks[i].style.setProperty('--rotate', ['0deg', '90deg'][i]);
}
for (let i=0; i<smallTicks.length; i++ ) {
  smallTicks[i].style.setProperty('--rotate', ['30deg', '60deg','-30deg', '-60deg'][i]);
}
