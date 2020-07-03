const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  //to display numbers in the screen 
  function inputDigit(digit) {
      const { displayValue, waitingForSecondOperand } = calculator;
      
      if(waitingForSecondOperand === true){
          calculator.displayValue = digit;
          calculator.waitingForSecondOperand = false;
      } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
      }
    }

  //Input a decimal point
function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) return;
    //if 'dispalyValue' does not contain a decimal point
    if (!calculator.displayValue.includes(dot)){
        //append decimal point
        calculator.displayValue += dot;
    }
}

//handling operators

function handelOperator(nextOperator) {
    const { firstOperand, displayValue, operator} = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand){
        calculator.operator = nextOperator;
        return;
    }

    if (firstOperand == null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const currentValue = firstOperand || 0;
        const result = performCalculation[operator](currentValue, inputValue);
        
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

//Reset the calculator
function resetCalculator() {
    calculator.displayValue = '0'
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

//display screen//
function updateScreen() {
    const display = document.querySelector(".screen");
    display.value = calculator.displayValue;
}
updateScreen();


//operations
const keys = document.querySelector('.keys');
keys.addEventListener('click', (event) => {
    const { target } = event;  //it means const target = event.target
    if (!target.matches('button')) {
        //exit the function if it did not click a button
        return;
    }
    if (target.classList.contains('operator')) {
        handelOperator(target.value);
        updateScreen();
        return;
    }
    if (target.classList.contains('clear')) {
        resetCalculator();
        updateScreen();
        return;
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateScreen();
        return;
    }
        
    inputDigit(target.value);
    updateScreen();

})



 // click sound event to all buttons

function playAudio(){
    const tick = new Audio('sounds/click.mp3');
    tick.play();
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', playAudio)
});