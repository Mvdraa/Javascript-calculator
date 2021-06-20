"use strict";
const numButtons = Array.from(document.querySelectorAll('.numberButton'));
const opButtons = Array.from(document.querySelectorAll('.operatorButton'));
const output = document.querySelector("#result");
const totalArray = [];

let pressed = true;

function arithmeticOp(fullArrOfMath) {
  let a = fullArrOfMath[0] * 1;
  let arithmetic = fullArrOfMath[1];
  let b = fullArrOfMath[2] * 1;
  let result = 0;
  switch (arithmetic) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '/':
      result = a / b;
      break;
    case '*':
      result = a * b;
      break;
  }
  console.log(fullArrOfMath);
  return result;
}

function checkIfPressed(pressedOrNot) {
  for (let i = 0; i < opButtons.length; i++) {
    if (opButtons[i].classList.contains('pressed')) {
      opButtons[i].classList.remove('pressed');
      pressedOrNot = true;
      break;
    } else {
      pressedOrNot = false;
    }
  }
  return pressedOrNot;
}

function clear() {
  output.textContent = 0;
}

numButtons.forEach(x => x.addEventListener('click', (e) => {
  if (output.textContent == 0 || checkIfPressed(pressed)) {
    output.textContent = e.target.dataset.value;
  } else {
    output.textContent += e.target.dataset.value;
  }
}));

opButtons.forEach(op => op.addEventListener('click', (e) => {
  console.log(totalArray);
  if (e.target.dataset.value === '=') {
    totalArray.push(output.textContent);
    output.textContent = arithmeticOp(totalArray);
    totalArray.length = 0;
  } else if (e.target.dataset.value === 'C') {
    clear();
    totalArray.length = 0;
  } else {
    totalArray.push(output.textContent);
    totalArray.push(e.target.dataset.value);
    e.target.classList.add('pressed');
  }
}));