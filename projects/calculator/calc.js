#!/usr/bin/env node

/**
 * This is the main module to handle calculations
 * Author: Bradley Dillion Gilden
 * Date: 03-10-2023
 */


let stdout = document.querySelector('.calc__screen--output');
let result = 0;
let result2 = 0;
let operation = '';
let taken = false;
function main() {
  const keypad = document.querySelector('.calc__buttons');

  keypad.addEventListener('click', (e) => {
    key = e.target;
    if (key.classList.contains('button')) {
      processKeys(key.textContent);
    }
  })
  stdout.addEventListener('click', () => {
    stdout.textContent = '';
  })
}

function processKeys(key) {
  if(!isNaN(key) || key === '•') {
    key = key === '•' ? '.' : key;
    stdout.textContent += key;
  } else {
    switch (key) {
      case '+':
        operation = '+';
        break;
      case '-':
        operation = '-';
        break;
      case '÷':
        operation = '÷';
        break;
      case 'x':
        operation = 'x';
        break;
      case '=':
        calculate(operation);
        break;
    }
    if (!isNaN(stdout.textContent)) {
      let num = stdout.textContent;
      if (!taken) {
        result = num.includes('.') ? parseFloat(num) : parseInt(num);
        taken = true;
      } else {
        result2 = num.includes('.') ? parseFloat(num) : parseInt(num);
        taken = false;
      }
      console.log(result, result2, typeof result);
      stdout.textContent = '';
    } else {
      stdout.textContent = 'Error';
      result = 0;
      result2 = 0;
      taken = false;
    }
  }
}

function calculate(operation) {
  let final;
  switch (operation) {
    case '+':
      final = result + result2;
      break;
    case '-':
      final = result - result2;
      break;
    case '÷':
      final = result / result2;
      break;
    case 'x':
      final = result / result2;
      break;
  }
  console.log(final);
  stdout.textContent = 'answer';
  console.log(final.toString(), 'to string')
  result = 0;
  result2 = 0;
}

main();
