module.exports = {
  sum: (firstNumber, secondNumber) => firstNumber + secondNumber,
  sub: (firstNumber, secondNumber) => firstNumber - secondNumber,
  mult: (firstNumber, secondNumber) => firstNumber * secondNumber,
  div: (firstNumber, secondNumber) => {
    return secondNumber === 0 ? `Não é possivel divisão por zero!` : firstNumber / secondNumber
  }
}
