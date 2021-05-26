
//Consider the following object: 

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

//Create an array from this object that contains only two elements: Barney's name and Barney's number:

[ 'Barney', 2 ]


//my solution

let arr = [];

for (prop in flintstones) {
  if (prop === "Barney") {
    arr.push(prop, flintstones[prop]);
  }
}

console.log(arr);


//actual solution

Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();