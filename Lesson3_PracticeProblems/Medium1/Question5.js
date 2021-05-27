
//What will the following two lines of code output?

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

//Don't look at the solution before you answer.

//solution

//If you thought that the outputs would be 0.9 and true, respectively, you were wrong. JavaScript uses floating point numbers for all numeric operations. Most floating point representations used on computers lack a certain amount of precision, and that can yield unexpected results like these.
//The details of why this happens aren't crucial right now -- it's just something you need to be aware of.