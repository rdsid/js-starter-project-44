import readlineSync from 'readline-sync';
import playGame from '../index.js';
import generateOperand from '../helpers/generateOperand.js';
import generateNumber from '../helpers/generateRandomNumber.js';

function playCalc(name) {
  const num1 = generateNumber(20);
  const num2 = generateNumber(20);
  const operand = generateOperand();

  console.log('What is the result of the expression?');
  const answer = readlineSync.question(`Question: ${num1} ${operand} ${num2}\nYour answer: `);
  let res;
  switch (operand) {
    case '+': res = num1 + num2; break;
    case '-': res = num1 - num2; break;
    case '*': res = num1 * num2; break;
    default: res = num1 + num2;
  }
  if (res === parseInt(answer, 10)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${name}!`);
  return false;
}

const start = () => playGame(playCalc);
export default start;
