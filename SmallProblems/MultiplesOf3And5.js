
function multisum(number) {
  let sum = 0;

  for (let index = 1; index <= number; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      sum += index;
      continue;
    }
    if (index % 3 === 0) {
      sum += index;
      continue;
    }
    if (index % 5 === 0) {
      sum += index;
      continue;
    }

  }
  return sum;
}

//AlTERNATIVE REFACTORING

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum2(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}