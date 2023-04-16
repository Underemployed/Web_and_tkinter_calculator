const display = document.getElementById("display");

display.addEventListener("input", function() {
  // 
  const value = display.value;
  console.log(value);
});

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

  const regex = /^[\d\s\(\)\+\-\*\/\.]+$/;
  if (!regex.test(expression)) {
    
    display.value = "Invalid input!";
    
    return false;
  }
  return true;
}


function calculate(s) {
function update(op, v) {
if (op == "+") stack.push(v);
if (op == "-") stack.push(-v);
if (op == "*") stack.push(Math.floor(stack.pop() * v));
if (op == "/") stack.push(Math.floor(stack.pop() / v));
}

var stack = [];
var num = 0;
var op = "+";
for (var i = 0; i < s.length; i++) {
  var c = s.charAt(i);

  if (c >= "0" && c <= "9") {
    num = num * 10 + parseInt(c);
} else if (c == "(") {
stack.push(op);
op = "+";
} else if (c == ")") {
update(stack.pop(), num);
op = "+";
} else if (c == "+" ||  c == "-" || c == "*" || c == "/") {
update(op, num);
num = 0;
op = c;
}
}
update(op, num);

var result = 0;
for (var i = 0; i < stack.length; i++) {
result += stack[i];
}
return result;

} 

display.addEventListener("input", function() {

const value = display.value;
console.log(value);
});

document.getElementById("display").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      calculateResult();
  }});

display.addEventListener("input", function() {

const value = display.value;
console.log(value);


});
function toggleMode() {
  const body = document.querySelector("body");
  const switchBtn = document.querySelector(".switch input[type='checkbox']");

  if (switchBtn.checked) {
    body.classList.add("dark-mode");
    calculator.classList.add("dark-mode");
    body.classList.remove("light-mode");
    calculator.classList.add("dark-mode");
    calculator.classList.remove("dark-mode");
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    calculator.classList.add("light-mode");
    calculator.classList.remove("dark-mode");
  }
}