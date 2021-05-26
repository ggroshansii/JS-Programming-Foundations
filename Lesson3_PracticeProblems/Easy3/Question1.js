
//Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];


//solution #1

numbers.splice(0, numbers.length);

// solution #2

numbers.length = 0;

// solution #3

while (numbers.length) {
  numbers.pop();
}
