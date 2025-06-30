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

// Add keyboard event listener
document.addEventListener('keydown', handleKeyboardInput);

function handleKeyboardInput(event) {
  const key = event.key;
  
  // Numbers
  if (key >= '0' && key <= '9') {
    appendNumber(key);
  }
  // Decimal point
  else if (key === '.') {
    appendNumber('.');
  }
  // Operators
  else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
    appendOperator(key);
  }
  // Power operator (Shift + 6 for ^)
  else if (key === '^') {
    appendOperator('^');
  }
  // Calculate (Enter or =)
  else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculate();
  }
  // Clear (Escape, Delete, or c/C)
  else if (key === 'Escape' || key === 'Delete' || key.toLowerCase() === 'c') {
    clearDisplay();
  }
  // Backspace
  else if (key === 'Backspace') {
    event.preventDefault();
    if (display.textContent.length > 0) {
      display.textContent = display.textContent.slice(0, -1);
    }
  }
}