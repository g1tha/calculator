const inputScreen = document.querySelector('.input-screen');
const outputScreen = document.querySelector('.output-screen');
const numBtns = Array.from(document.querySelectorAll('.num.btn'));
const decBtn = document.querySelector('.dec');
const signBtn = document.querySelector('.sign');
const delBtn = document.querySelector('.del');
const acBtn = document.querySelector('.ac');
const pcBtn = document.querySelector('.pc');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const equalsBtn = document.querySelector('.equals');


let currentInput = '';
let args = [];

numBtns.forEach(e => e.addEventListener('click', recordNum));
decBtn.addEventListener('click', addDec);
signBtn.addEventListener('click', changeSign);
delBtn.addEventListener('click', DelChar);
acBtn.addEventListener('click', allClear);
pcBtn.addEventListener('click', toPercent);
plusBtn.addEventListener('click', plusNums);
minusBtn.addEventListener('click', minusNums);
multiplyBtn.addEventListener('click', multiplyNums);
divideBtn.addEventListener('click', divideNums);
equalsBtn.addEventListener('click', evaluate);
window.addEventListener('keydown', parseKeys);

function recordNum(e) {
 currentInput += e.target.textContent; 
outputScreen.textContent = currentInput;
}

function addDec() {
  if (currentInput.includes('.')) {
    return;
  }
  currentInput += '.';
  outputScreen.textContent = currentInput;
}

function changeSign() {
  if (currentInput.charAt(0) === '-') {
    currentInput = currentInput.slice(1);
  } else {
    currentInput = '-' + currentInput;
  }
  outputScreen.textContent = currentInput;
}
function DelChar() {
  currentInput = currentInput.slice(0, currentInput.length - 1);
  outputScreen.textContent = currentInput;
}

function allClear() {
  currentInput = '';
  outputScreen.textContent = currentInput;
  inputScreen.textContent = '';
  args = [];
}

function toPercent() {
  currentInput = currentInput / 100;
  currentInput = currentInput.toString();
  outputScreen.textContent = currentInput;
}

function plusNums() {
  if (currentInput === ''){
    return;
  }
  args.push(currentInput);
  args.push('+');
  inputScreen.textContent = args.join('');
  currentInput = '';
  outputScreen.textContent = currentInput;
}

function minusNums() {
  if (currentInput === ''){
    return;
  }
  args.push(currentInput);
  args.push('-');
  inputScreen.textContent = args.join('');
  currentInput = '';
  outputScreen.textContent = currentInput;
}

function multiplyNums() {
  if (currentInput === ''){
    return;
  }
  args.push(currentInput);
  args.push('×');
  inputScreen.textContent = args.join('');
  currentInput = '';
  outputScreen.textContent = currentInput;
}

function divideNums() {
  if (currentInput === ''){
    return;
  }
  args.push(currentInput);
  args.push('÷');
  inputScreen.textContent = args.join('');
  currentInput = '';
  outputScreen.textContent = currentInput;
}

function evaluate() {
  args.push(currentInput);
  if (args[args.length - 1] === '') {
    args.pop();
  }
  if (args[args.length - 1] === '+' || args[args.length - 1] === '-' ||  args[args.length - 1] === '×'||  args[args.length - 1] === '÷') {
    args.pop();
  }
  inputScreen.textContent = args.join('');
  currentInput = '';
  outputScreen.textContent = currentInput;
  if (args.length === 1) {
    currentInput = args;
    outputScreen.textContent = currentInput;
    inputScreen.textContent = '';
    args = [];
  } else {
      for (let i = 0; i < args.length; i++) {
        if (args[i] === '×') {
          args.splice((i - 1), 3, (args[i - 1] * args[i + 1]));
          evaluate();
        }
      }
      for (let i = 0; i < args.length; i++) {
        if (args[i] === '÷') {
          args.splice((i - 1), 3, (args[i - 1] / args[i + 1]));
          evaluate();
        }
      }
      for (let i = 0; i < args.length; i++) {
        if (args[i] === '+') {
          args.splice((i - 1), 3, (parseFloat(args[i - 1]) + parseFloat(args[i + 1])));
          evaluate();
        }
      }
      for (let i = 0; i < args.length; i++) {
        if (args[i] === '-') {
          args.splice((i - 1), 3, (parseFloat(args[i - 1]) - parseFloat(args[i + 1])));
          evaluate();
        }
      }
  }
}

function parseKeys(e) {
  if (e.key === '0') {document.querySelector('.zero').click()};
  if (e.key === '1') {document.querySelector('.one').click()};
  if (e.key === '2') {document.querySelector('.two').click()};
  if (e.key === '3') {document.querySelector('.three').click()};
  if (e.key === '4') {document.querySelector('.four').click()};
  if (e.key === '5') {document.querySelector('.five').click()};
  if (e.key === '6') {document.querySelector('.six').click()};
  if (e.key === '7') {document.querySelector('.seven').click()};
  if (e.key === '8') {document.querySelector('.eight').click()};
  if (e.key === '9') {document.querySelector('.nine').click()};
  if (e.key === '.') {document.querySelector('.dec').click()};
  if (e.key === '+') {document.querySelector('.plus').click()};
  if (e.key === '-') {document.querySelector('.minus').click()};
  if (e.key === '*') {document.querySelector('.multiply').click()};
  if (e.key === '/') {document.querySelector('.divide').click()};
  if (e.key === 'Enter') {document.querySelector('.equals').click()};
  if (e.key === 'Backspace') {document.querySelector('.del').click()};
  if (e.key === 'Delete') {document.querySelector('.ac').click()};
  if (e.key === 'Escape') {document.querySelector('.ac').click()};
  if (e.key === '%') {document.querySelector('.pc').click()};
}


