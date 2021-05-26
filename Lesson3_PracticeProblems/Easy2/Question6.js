
//Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

//This code will create a nested array that looks like this:

["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

//Nesting data structures like we do here is commonplace in JavaScript and programming in general. We'll explore this in much greater depth in a future Lesson.

//Create a new array that contains all of the above values, but in an un-nested format:

[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]


//my solution

flintstones = flintstones.flat()
console.log(flintstones);

//alt solution

let flintstones2 = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

flintstones2 = [].concat(flintstones2[0], flintstones2[1], flintstones2[2][0], flintstones2[2][1], flintstones2[3][0], flintstones2[3][1]);
console.log(flintstones2);

//alt2 solution

let flintstones3 = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

flintstones3 = flintstones3.reduce((accum, element) => {
  let splitElement;
  element = String(element);
  if (element.includes(",")){
    splitElement = element.split(",")
    for (let i = 0; i < splitElement.length; i++){
      accum.push(splitElement[i]);
    }
    return accum;
  }
  else{
    accum.push(String(element));
    return accum;
  }

}, []);

console.log(flintstones3);



//actual solutions

flintstones = [].concat(...flintstones);

flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});

let newFlintstones2 = flintstones.flat();

console.log(...flintstones)