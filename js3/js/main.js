'use strict';
let i = 10;
let timerId = setInterval(function() {
        document.getElementById("timer").innerText = i;
        if (i === 0) {
         document.getElementById('timer').classList.add("none");
          let firstNumber = +prompt('Enter the first number');
          let secondNumber = +prompt('Enter the second number');
          let operationType = prompt('Enter operation sign'); 
        }
        i--;
    }, 1000);

function calculator(firstNumber, secondNumber, operationType) {
  switch (operationType) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
  }
}
alert(calculator(firstNumber, secondNumber, operationType));