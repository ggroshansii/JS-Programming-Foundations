
let readline = require('readline-sync');

console.log("Enter the length: ");
let length = readline.question();

console.log("Enter the width: ");
let width = readline.question();

console.log(`Area of the room in meters: ${Number(length) * Number(width)}`);
console.log(`Area of the room in feet: ${(((Number(length) * Number(width)) * 10.7639)).toFixed(2)}`);
