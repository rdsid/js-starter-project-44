#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playGame from '../../src/index.js';
import generateNumber from '../helpers/generateRandomNumber.js';

function playPrime(name) {
  const num = generateNumber();
  let res = 'yes';
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      res = 'no';
    }
  }
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
  if (res === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${name}!`);
  return false;
}

playGame(playPrime);
