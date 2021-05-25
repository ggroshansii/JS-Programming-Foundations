

//Determine whether the name Dino appears in the strings below -- check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";


//my solution
console.log(/Dino/.test(str1))
console.log(/Dino/.test(str2))

//actual solution
str1.includes('Dino'); // false
str2.includes('Dino'); // true