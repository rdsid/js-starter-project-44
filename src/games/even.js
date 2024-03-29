import readlineSync from 'readline-sync';
import playGame from '../index.js';
import generateNumber from '../helpers/generateRandomNumber.js';

function isOdd(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function playEven(name) {
  const number = generateNumber(100);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
  if (isOdd(number) && answer !== 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    return false;
  }
  if (!isOdd(number) && answer !== 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    return false;
  }
  console.log('Correct!');
  return true;
}

const start = () => playGame(playEven);
export default start;
