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

function updateDisplay(value) {
  result.textContent = value;
}

var buttons = [
  { value: "AC", class: "color1" },
  { value: "-/+", class: "color1" },
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

function calculate() {
  var expression = result.textContent;
  try {
    var resultado = eval(expression);
    updateDisplay(resultado);
  } catch (error) {
    updateDisplay("Erro");
  }
  updateDisplay(resultado);
  isResultDisplayed = true;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Erro";
  }
  return a / b;
}

function percentage(number) {
  return number / 100;
}

var isResultDisplayed = false;

function buttonClick(value) {
  if (value === "=") {
    calculate();
  } else if (value === "AC") {
    result.textContent = "0";
  } else if (value === "-/+") {
    if (result.textContent !== "0" && result.textContent !== "Erro") {
      if (result.textContent.charAt(0) === "-") {
        result.textContent = result.textContent.slice(2);
      } else {
        result.textContent = "(-" + result.textContent + ")";
      }
    }
  } else if (value === "%") {
    var currentValue = parseFloat(result.textContent);
    var newValue = percentage(currentValue);
    updateDisplay(newValue);
  } else {
    if (isResultDisplayed) {
      if (!["+", "-", "*", "/"].includes(value)) {
        result.textContent = "0";
      }
      isResultDisplayed = false;
    }

    if (result.textContent === "0" || result.textContent === "Erro") {
      if (value === ".") {
        result.textContent = "0" + value;
      } else {
        result.textContent = value;
      }
    } else {
      if (!(value === "." && result.textContent.includes("."))) {
        result.textContent += value;
      }
    }
  }
}

var detalhe = document.createElement("div");
detalhe.classList.add("detalhe");
calculadora.appendChild(detalhe);
