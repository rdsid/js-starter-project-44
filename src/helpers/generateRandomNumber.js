export default function generateNumber(max = 100, min = 0) {
  const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
  return randomNumber;
}
