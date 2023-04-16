function toggleMode() {
  const body = document.querySelector("body");
  const switchBtn = document.querySelector(".switch input[type='checkbox']");

  if (switchBtn.checked) {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
  }
}

    const display = document.getElementById("display");

    

      function clearDisplay() {
        display.value = "";
      }

      function removeLastCharacter() {
        const value = display.value;
        display.value = value.substring(0, value.length - 1);
      }

      function addToDisplay(character) {
        display.value += character;
      }

      function calculateResult() {
        const expression = display.value;
        if (checkInput(expression)) {
          const result = calculate(expression);
          display.value = result;
        }
      }

      function checkInput(expression) {
        // Check if the input contains only numbers, operators, and parentheses
        const regex = /^[\d\s\(\)\+\-\*\/\.]+$/;
        if (!regex.test(expression)) {
          // Display an error message in the display area
          display.value = "Invalid input!";
          // Reset the input to the previous value
          return false;
        }
        return true;
      }


// uses getprecedence and applyoperation function for calculation
function calculate(expression) {
    //removes emplty spaces
  expression = expression.replace(/\s+/g, '');
      //use arrays to keep track operators and operands

  var operators = [];
  var operands = [];
  for (var i = 0; i < expression.length; i++) {
    var char = expression.charAt(i);
    if (/\d/.test(char) || char === '.') {
      var start = i;
      while (i < expression.length && (/[\d.]/.test(expression.charAt(i)))) {
        i++;
      }
      operands.push(parseFloat(expression.substring(start, i)));
      i--;
    } else if (/[+\-*/^()%]/.test(char)) {
      if (char === '(') {
        operators.push(char);
      } else if (char === ')') {
        while (operators[operators.length - 1] !== '(') {
          var operator = operators.pop();
          var operand2 = operands.pop();
          var operand1 = operands.pop();
          operands.push(applyOperation(operator, operand1, operand2));
        }
        operators.pop();
      } else {
        while (operators.length > 0 && getPrecedence(operators[operators.length - 1]) >= getPrecedence(char)) {
          var operator = operators.pop();
          var operand2 = operands.pop();
          var operand1 = operands.pop();
          operands.push(applyOperation(operator, operand1, operand2));
        }
        operators.push(char);
      }
    } else {
      throw new Error('Invalid character: ' + char);
    }
  }
  while (operators.length > 0) {
    var operator = operators.pop();
    var operand2 = operands.pop();
    var operand1 = operands.pop();
    operands.push(applyOperation(operator, operand1, operand2));
  }
  return operands.pop();
}

function getPrecedence(operator) {
    //for managing priority of the operator decides which should run first
  switch (operator) {
    case '+':
    case '-':
      return 1;
    case '*':
    case '/':
      return 2;
    case '^':
      return 3;
    case '%':
      return 4;
    default:
      return 0;
  }
}

function applyOperation(operator, operand1, operand2) {
    //takes operator and two numbers as input and applies the operator
    switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    case '%':
      return operand1 % operand2;
    case '^':
      return Math.pow(operand1, operand2);
    default:
      throw new Error('Invalid operator: ' + operator);
  }
}


document.getElementById("display").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
        //   EXECUTES THE EXPRESSION ON PRESSING ENTER ON KEYBOARD
            calculateResult();
        }});

display.addEventListener("input", function() {
    // TAKES BOTH TYPED AND INPUT THRU BUTTONS USING EVENT LISTENER AND DISPLAYS  INSIDE INPUT
    
    const value = display.value;
    console.log(value);
});