
let readline = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length: ");
let length = readline.question();

console.log("Enter the width: ");
let width = readline.question();

let areaInMeters = Number(length) * Number(width);
let areaInFeet = (((Number(length) * Number(width)) * SQMETERS_TO_SQFEET)).toFixed(2);

console.log(`Area of the room in meters: ${areaInMeters}`);
console.log(`Area of the room in feet: ${areaInFeet}`);
