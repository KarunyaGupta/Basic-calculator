let display = document.querySelector('.display');
let previousOperator = null;
let previousOperand = null;

function appendNumber(number) {
  display.textContent += number;
}

function appendOperator(operator) {
  if (previousOperator) {
    calculate();
  }
  previousOperator = operator;
  previousOperand = parseFloat(display.textContent);
  display.textContent += operator;
}

function calculate() {
  let currentOperand = parseFloat(display.textContent.substring(display.textContent.lastIndexOf(previousOperator) + 1));
  let result;
  switch (previousOperator) {
    case '+':
        result = previousOperand + currentOperand;
        break;
    case '-':
        result = previousOperand - currentOperand;
        break;
    case '*':
        result = previousOperand * currentOperand;
        break;
    case '/':
        result = previousOperand / currentOperand;
        break;
    case '%':
        result=previousOperand % currentOperand;
        break;
    case '^':
        result = Math.pow(previousOperand, currentOperand);
  }
  display.textContent = result;
  previousOperator = null;
  previousOperand = null;
}

function clearDisplay() {
  display.textContent = '';
}