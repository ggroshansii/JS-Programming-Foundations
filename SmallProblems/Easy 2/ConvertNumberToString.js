
function integerToString(number) {

  let numberArray = [];
  if (number === 0) {
    numberArray.unshift(number);
    return numberArray.join("");
  }

  while (number >= 1) {
    let integer = number % 10;
    numberArray.unshift(integer);
    number = Math.floor(number / 10);
  }
  return numberArray.join("");
}