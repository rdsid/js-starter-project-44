#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playGame from '../../src/index.js';
import generateOperand from '../helpers/generateOperand.js';
import generateNumber from '../helpers/generateRandomNumber.js';

function playCalc(name) {
  const num1 = generateNumber();
  const num2 = generateNumber();
  const operand = generateOperand();

  console.log('What is the result of the expression?');
  const answer = readlineSync.question(`Question: ${num1} ${operand} ${num2}\nYour answer: `);
  const result = parseInt(`${num1} ${operand} ${num2}`, 10);
  if (result === parseInt(answer, 10)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
  return false;
}

playGame(playCalc);
