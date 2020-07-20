const arrows = [...document.querySelectorAll('.arrow')];
const digital = document.querySelector('.digital');
setInterval(() => {
  const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const milliSecond = date.getMilliseconds();
arrows[0].style.setProperty('--rotate', `${hour*30+minute/2}deg`);

arrows[1].style.setProperty('--rotate', `${minute*6 + second/10}deg`);
arrows[2].style.setProperty('--rotate', `${second*6 + milliSecond/180}deg`);
  digital.textContent = `${('0'+hour).substr(-2)}:${('0'+minute).substr(-2)}:${('0'+second).substr(-2)}`;
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
let j=0;
for (let i=0; i<tinyTicks.length; i++ ) {
  if ((i)%4===0) j++;
  tinyTicks[i].style.setProperty('--rotate', `${(i+j)*6}deg`);
}