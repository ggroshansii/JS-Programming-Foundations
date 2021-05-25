
//How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

//My Solution

if ((str1[str1.length - 1]) === "!") {
  console.log(true);
} else {
  console.log(false);
}

//Actual Solution

str1.endsWith("!"); // true
str2.endsWith("!"); // false