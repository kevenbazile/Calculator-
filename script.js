let currentInput = "0";
let operator = null;
let previousInput = null;

const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

function updateDisplay() {
  resultDisplay.textContent = currentInput;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.dataset.number;
    const op = button.dataset.operator;

    if (number !== undefined) {
      if (currentInput === "0") {
        currentInput = number;
      } else {
        currentInput += number;
      }
    } else if (op) {
      operator = op;
      previousInput = currentInput;
      currentInput = "0";
    } else if (button.id === "equal") {
      if (previousInput !== null && operator !== null) {
        currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
        operator = null;
        previousInput = null;
      }
    } else if (button.id === "clear") {
      currentInput = "0";
      operator = null;
      previousInput = null;
    }
    updateDisplay();
  });
});

updateDisplay();
