import getName from './cli.js';

export default function playGame(chosenGame) {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}`);
  let counter = 0;
  do {
    if (chosenGame(name)) {
      counter += 1;
    } else {
      return;
    }
  } while (counter < 3);
  console.log(`Congratulations, ${name}!`);
}
