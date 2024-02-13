#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playGame from '../../src/index.js';
import generateNumber from '../helpers/generateRandomNumber.js';

function playProgression(name) {
  const progressionLength = generateNumber(20, 5);
  const progressionStep = generateNumber(50, 1);
  const progressionSkip = generateNumber(progressionLength - 1);
  const progression = [];
  let res;
  const initialValue = generateNumber();
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === progressionSkip) {
      progression.push('..');
      res = initialValue + progressionStep * i;
    } else {
      progression.push(initialValue + progressionStep * i);
    }
  }
  console.log('What number is missing in the progression?');
  const answer = readlineSync.question(`Question: ${progression.toString().replaceAll(',', ' ')}\nYour answer: `);
  if (res === parseInt(answer, 10)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${name}!`);
  return false;
}

playGame(playProgression);
