
//Given a number and an array, determine whether the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true


//my solution

if (numbers.indexOf(number1) > -1) {
  console.log(true);
} else {
  console.log(false);
}

if (numbers.indexOf(number2) > -1) {
  console.log(true);
} else {
  console.log(false);
}


//actual solution

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));