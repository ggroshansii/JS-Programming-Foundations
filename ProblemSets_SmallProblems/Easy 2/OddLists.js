
function oddities(arr) {
  let oddIndices = [];

  if (typeof arr === "object") {
    for (let index = 0; index < arr.length; index++) {
      if (index === 0 || index % 2 === 0) {
        oddIndices.push(arr[index]);
      }
    }
  } else {
    return "Argument is not an array";
  }

  return oddIndices;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
