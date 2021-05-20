function integerToString(number) {
  let numberArray = [];
  do {
    let integer = number % 10;
    numberArray.unshift(integer);
    number = Math.floor(number / 10);
  } while (number > 0);

  return numberArray.join("");
}
