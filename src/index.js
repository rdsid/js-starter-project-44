import getName from './cli.js';

export default function playGame(chosenGame) {
  console.log('Welcome to the Brain Games!');
  let counter = 0;
  const name = getName();
  do {
    if (chosenGame(name)) {
      counter += 1;
    } else {
      return;
    }
  } while (counter < 3);
  console.log(`Congratulations, ${name}!`);
}
