export default function generateOperand() {
  const string = '+-*';
  const randomNumber = Math.floor(Math.random() * 3);
  return string[randomNumber];
}
