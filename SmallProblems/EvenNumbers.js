for (let index = 2; index < 100; index += 2) {
  console.log(index);
}


//ALTERNATIVE SOLUTION

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}