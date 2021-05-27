
// What is the output of the following code?


let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

//solution

//TRICK QUESTION (look at the variables). Answer is 34