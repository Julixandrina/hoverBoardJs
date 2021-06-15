'use strict';

const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const COLORS = ['#FFAEBC', '#A0E7E5', '#B4F8C8', '#FBE7C6', '#A3EBB1', '#21B6A8'];


for(let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))
  board.append(square);

}
function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
 const index = Math.floor(Math.random() * COLORS.length)
return COLORS[index]
}
