const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;
const sub = (firstNumber, secondNumber) => firstNumber - secondNumber;
const mult = (firstNumber, secondNumber) => firstNumber * secondNumber;
const div = (firstNumber, secondNumber) => (secondNumber === 0) ? 'Não é possível divisão por zero!' : firstNumber / secondNumber;

export { sum, sub, mult, div }
