import readlineSync from 'readline-sync';

export default function getName() {
  const name = readlineSync.question('May I have your name?');
  return name;
}

console.log();
