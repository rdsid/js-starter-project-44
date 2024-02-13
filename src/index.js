import getName from './cli.js';

export default function playGame(game) {
  let counter = 0;
  const name = getName();
  do {
    if (game(name)) {
      counter += 1;
    } else {
      return;
    }
  } while (counter < 3);
  console.log(`Congratulations, ${name}!`);
}
