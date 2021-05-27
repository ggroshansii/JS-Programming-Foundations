
//What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

//Try to answer without running the code.

//solution: [ { first: 42 }, { second: "value2" }, 3, 4, 5 ]

//Internally, arr1 looks something like this after line 1 runs:

// +---------+             +---------------------+
// | pointer | ----------> | { first: "value1" } |
// +---------+             +---------------------+
// | pointer | -----+
// +---------+      |
// |    3    |      |      +----------------------+
// +---------+      +----> | { second: "value2" } |
// |    4    |             +----------------------+
// +---------+
// |    5    |
// +---------+



// The slice method performs shallow copies. Thus, when we call arr1.slice(), we end up with something like this:

// arr1                                                       arr2
// +---------+             +---------------------+              +---------+
// | pointer | ----------> | { first: "value1" } | <----------- | pointer |
// +---------+             +---------------------+              +---------+
// | pointer | -----+                                    +----- | pointer |
// +---------+      |                                    |      +---------+
// |    3    |      |      +----------------------+      |      |    3    |
// +---------+      +----> | { second: "value2" } | <----+      +---------+
// |    4    |             +----------------------+             |    4    |
// +---------+                                                  +---------+
// |    5    |                                                  |    5    |
// +---------+                                                  +---------+


// arr1[0] and arr2[0] point to the same object, { first: "value1" }. Thus, when we replace the value of the first property by using arr2[0].first, the change shows up in arr1 as well. In the end, we get the following results:

// arr1                                                       arr2
// +---------+             +---------------------+              +---------+
// | pointer | ----------> |    { first: 42 }    | <----------- | pointer |
// +---------+             +---------------------+              +---------+
// | pointer | -----+                                    +----- | pointer |
// +---------+      |                                    |      +---------+
// |    3    |      |      +----------------------+      |      |    3    |
// +---------+      +----> | { second: "value2" } | <----+      +---------+
// |    4    |             +----------------------+             |    4    |
// +---------+                                                  +---------+
// |    5    |                                                  |    5    |
// +---------+                                                  +---------+