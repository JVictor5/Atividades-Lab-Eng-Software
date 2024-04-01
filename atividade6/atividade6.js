var calDiv = document.getElementById("calculadora");

var calculadora = document.createElement("div");
calculadora.classList.add("calculadora");
calDiv.appendChild(calculadora);

var display = document.createElement("div");
display.classList.add("display");
calculadora.appendChild(display);

var result = document.createElement("p");
result.classList.add("result");
display.appendChild(result);

updateDisplay("0");

var buttons = [
  { value: "AC", class: "color1" },
  { value: "+/-", class: "color1" },
  { value: "%", class: "color1" },
  { value: "/", class: "color3" },
  { value: "7", class: "color2" },
  { value: "8", class: "color2" },
  { value: "9", class: "color2" },
  { value: "*", class: "color3" },
  { value: "4", class: "color2" },
  { value: "5", class: "color2" },
  { value: "6", class: "color2" },
  { value: "-", class: "color3" },
  { value: "1", class: "color2" },
  { value: "2", class: "color2" },
  { value: "3", class: "color2" },
  { value: "+", class: "color3" },
  { value: "0", class: "button-0" },
  { value: ".", class: "color2" },
  { value: "=", class: "color3" },
];

var buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
calculadora.appendChild(buttonContainer);

buttons.forEach(function (buttonValue) {
  var button = document.createElement("input");
  button.type = "button";
  button.value = buttonValue.value;
  button.classList.add(buttonValue.class);
  button.onclick = function () {
    buttonClick(buttonValue.value);
  };
  buttonContainer.appendChild(button);
});

var detalhe = document.createElement("div");
detalhe.classList.add("detalhe");
calculadora.appendChild(detalhe);

var currentNumber = "";
var operands = [];
var operators = [];
var restart = false;

function updateDisplay(value) {
  result.textContent = value;
}
function addDigit(digit) {
  if (digit === "." && (currentNumber.includes(".") || !currentNumber)) return;

  if (restart) {
    currentNumber = digit;
    restart = false;
  } else {
    currentNumber += digit;
  }

  updateDisplay(currentNumber);
  document.querySelectorAll(".button-container input").forEach((btn) => {
    btn.classList.remove("active");
  });
}

function setOperator(newOperator) {
  if (currentNumber) {
    operands.push(parseFloat(currentNumber));
    currentNumber = "";
  }

  operators.push(newOperator);
  restart = false;
}

function calculate() {
  if (operands.length < 1 || operators.length === 0) return;

  operands.push(parseFloat(currentNumber));

  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    const nextOperand = operands[i + 1];

    switch (operator) {
      case "+":
        operands[i + 1] = operands[i] + nextOperand;
        break;
      case "-":
        operands[i + 1] = operands[i] - nextOperand;
        break;
      case "*":
        operands[i + 1] = operands[i] * nextOperand;
        break;
      case "/":
        if (nextOperand === 0) {
          updateDisplay("Error: Division by zero");
          return;
        }
        operands[i + 1] = operands[i] / nextOperand;
        break;
      default:
        break;
    }
  }

  currentNumber = operands[operands.length - 1].toString();
  operands = [];
  operators = [];
  restart = true;
  updateDisplay(currentNumber);
}

function clearCalculator() {
  currentNumber = "";
  operands = [];
  operators = [];
  restart = true;
  updateDisplay("0");
}

function setPercentage() {
  let result = parseFloat(currentNumber) / 100;
  if (
    operators.length > 0 &&
    ["+", "-"].includes(operators[operators.length - 1])
  ) {
    let lastValue = operands[operands.length - 1] || 0;

    result = lastValue * result;
  }

  currentNumber = result.toString();
  updateDisplay(result);
}

function buttonClick(value) {
  if (/^[0-9.]+$/.test(value)) {
    addDigit(value);
  } else if (["+", "-", "*", "/"].includes(value)) {
    setOperator(value);
    document.querySelectorAll(".button-container input").forEach((btn) => {
      btn.classList.remove("active");
    });
    document
      .querySelector(`.button-container input[value='${value}']`)
      .classList.add("active");
  } else if (value === "=") {
    calculate();
  } else if (value === "AC") {
    clearCalculator();
  } else if (value === "+/-") {
    currentNumber = (-parseFloat(currentNumber)).toString();
    updateDisplay(currentNumber);
  } else if (value === "%") {
    setPercentage();
  }
}
