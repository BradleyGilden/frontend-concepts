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
function main() {
  const keypad = document.querySelector('.calc__buttons');

  keypad.addEventListener('click', (e) => {
    key = e.target;
    if (key.classList.contains('button')) {
      processKeys(key.textContent);
    }
  })
  stdout.addEventListener('click', () => {
    result = 0;
    result2 = 0;
    stdout.textContent = '';
  })
}

function processKeys(key) {
  console.log(key);
  if(!isNaN(key) || key === '•') {
    key = key === '•' ? '.' : key;
    stdout.textContent += key;
  } else {
    switch (key) {
      case '=':
        let num = stdout.textContent;
        result2 = num.includes('.') ? parseFloat(num) : parseInt(num);
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
            final = result * result2;
            break;
        }
        stdout.textContent = '';
        console.log(stdout.textContent);
        if (!isNaN(final)) {
          stdout.textContent = final.toString();
        } else {
          stdout.textContent = "Error";
        }
        
        result = 0;
        result2 = 0;
        return;
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
    }
    if (!isNaN(stdout.textContent)) {
      let num = stdout.textContent;
      result = num.includes('.') ? parseFloat(num) : parseInt(num);
      stdout.textContent = '';
    } else {
      stdout.textContent = 'Error';
      result = 0;
      result2 = 0;
    }
  }
}

function calculate(operation) {
  let num = stdout.textContent;
  result2 = num.includes('.') ? parseFloat(num) : parseInt(num);
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
      final = result * result2;
      break;
  }
  stdout.textContent = '';
  console.log(stdout.textContent);
  stdout.textContent = final.toString();
  console.log(final.toString(), 'to string')
  result = 0;
  result2 = 0;
}

main();
