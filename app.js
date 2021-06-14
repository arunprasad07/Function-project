const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPERS = 'PAPERS';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_CHOICE = ROCK;
const OPERATION_ADD = 'ADD';
const OPERATION_DIFF = 'DIFF';

const userSelection = () => {
  return prompt('Rock, Papers or Scissors?').toUpperCase();
};

const computerSelection = () => {
  const randomValue = Math.random();
  if (randomValue < 0.35) {
    return ROCK;
  } else if (randomValue < 0.72) {
    return PAPERS;
  } else {
    return SCISSORS;
  }
};

const decideWinner = (cChoice, pChoice = DEFAULT_PLAYER_CHOICE) => {
  // if(pChoice)
};

const start = function () {
  console.log('Game starts...');
  const userChoice = userSelection();
  const cpuChoice = computerSelection();
  const result = decideWinner(cpuChoice, userChoice);
};

const sumUp = (resultHandlerFunction, operation, ...numbers) => {
  // Rest operator
  let sum = 0;
  for (const number of numbers) {
    operation == OPERATION_ADD ? (sum += number) : (sum -= number);
  }
  resultHandlerFunction(sum);
};

const subtractDown = function (a, ...numbers) {
  let diff = a;
  for (const number of numbers) {
    diff -= number;
  }
  return diff;
};

const showHandler = (message, result) => {
  alert(`${message} ${result}`);
};

// sumUp(
//   showHandler.bind(this, 'After adding up - '),
//   OPERATION_ADD,
//   1,
//   3,
//   4,
//   7,
//   10,
//   11,
//   20
// );

// sumUp(
//   showHandler.bind(this, 'After subtracting'),
//   OPERATION_DIFF,
//   300,
//   100,
//   10
// );

// 1.Start
// const person = {
//   name: 'Arun',
//   greetName: function greet() {
//     console.log('Hi there ' + this.name);
//   },
// };
// person.greetName();
// 1.End
// ------------------------------------------------------------
// 2.Start
// console.log(typeof userNamee);
//console.log(typeof startGame);
// console.dir(userNamee);
// console.dir(startGame);
// 2.End
// ------------------------------------------------------------
// startGameBtn.addEventListener('click', start);
//
