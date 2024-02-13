#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playGame from '../../src/index.js';
import generateNumber from '../helpers/generateRandomNumber.js';

function playGcd(name) {
  const num1 = generateNumber();
  const num2 = generateNumber();
  let biggestNumber = 0;
  if (num1 >= num2) {
    biggestNumber = num1;
  } else {
    biggestNumber = num2;
  }
  console.log('Find the greatest common divisor of given numbers.');
  const answer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);
  let res = 1;
  for (let i = 1; i < Math.ceil(biggestNumber / 2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      res = i;
    }
  }
  if (res === parseInt(answer, 10)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${name}!`);
  return false;
}

playGame(playGcd);
