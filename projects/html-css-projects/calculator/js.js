// ====== Elements ======
const mainResult = document.querySelector(".main-result");
const displayValues = document.querySelector(".display-values");

function displayPrimary(message) {
  mainResult.innerHTML = message;
}
function displaySecondary(message) {
  displayValues.innerHTML = message;
}

// ====== Helpers ======
function roundResult(num) {
  if (typeof num !== 'number' || !isFinite(num)) return num;
  return Math.round(num * 1000) / 1000; // 3 decimal places
}

// ====== Calculator state ======
let a = [];         // stores tokens like ["25", "+", "56"]
let lastWasResult = false; // if true, pressing a number will start new calc

// ====== Click handling ======
document.querySelector('.main-grid').addEventListener('click', (event) => {
  const box = event.target.closest('.box');
  if (!box) return;

  const span = box.querySelector('span');
  if (!span) return;

  const value = span.textContent.trim();

  // Ignore Enter here (handled separately)
  if (box.id === "box-enter") return;

  // AC -> reset everything
  if (box.id === "boxAC") {
    a = [];
    lastWasResult = false;
    displayPrimary("");
    displaySecondary("");
    return;
  }

  // If last action produced a result, and user presses a number => start fresh
  if (lastWasResult && /\d/.test(value)) {
    a = [];
    lastWasResult = false;
  }

  // Numbers: concatenate into last number token
  if (/\d/.test(value) || value === ".") {
    // handle decimal point: prevent multiple dots in same number
    if (a.length === 0 || isNaN(a[a.length - 1])) {
      // start new number with "0." if user clicks dot first
      a.push(value === "." ? "0." : value);
    } else {
      // only add dot if not already present
      if (value === "." && a[a.length - 1].includes(".")) {
        // ignore extra dot
      } else {
        a[a.length - 1] += value;
      }
    }
  } else {
    // value is operator
    // If previous token is an operator, replace it (no double-operator evaluation)
    if (a.length === 0) {
      // if no number yet and operator pressed, ignore (or allow negative?) — here we ignore
      return;
    }
    if (isNaN(a[a.length - 1])) {
      a[a.length - 1] = value; // replace operator
    } else {
      // if we already have [num, op, num] and user presses another operator -> evaluate first
      if (a.length >= 3) {
        const first = Number(a[0]);
        const op = a[1];
        const second = Number(a[2]);
        let interim = operate(first, op, second);
        if (typeof interim === 'number') interim = roundResult(interim);
        displayPrimary(interim);
        // start new tokens as [interimResult, newOperator]
        a = [String(interim), value];
        lastWasResult = true; // we just showed an interim result
      } else {
        a.push(value);
      }
    }
  }

  displaySecondary(a.join(' '));
});

// ====== Enter handling ======
document.querySelector('#box-enter').addEventListener('click', () => {
  if (a.length < 3) {
    displayPrimary("Incomplete");
    return;
  }
  const first = Number(a[0]);
  const op = a[1];
  const second = Number(a[2]);

  let result = operate(first, op, second);
  if (typeof result === 'number') result = roundResult(result);

  displayPrimary(result);
  displaySecondary(`${a[0]} ${a[1]} ${a[2]}`); // show expression
  a = [];              // clear tokens so user can start fresh (or you could set a=[String(result)] to chain)
  lastWasResult = true;
});

// ====== Operators and arithmetic ======
function operate(first, operator, second) {
  switch (operator) {
    case "/": return divide(first, second);
    case "x":
    case "*": return multiply(first, second);
    case "%": return percentile(first, second);
    case "-": return subtract(first, second);
    case "+": return addition(first, second);
    default: return "Invalid Operator";
  }
}

function addition(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function percentile(a, b) { return a % b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return "😏 Nice try!";
  return a / b;
}