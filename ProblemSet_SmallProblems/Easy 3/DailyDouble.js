
function crunch(string) {

  let lastChar = string[0];
  let newString = [];

  for (let index = 1; index < string.length + 1; index++) {
    if (string[index] === lastChar) {
      continue;
    } else {
      newString.push(lastChar);
      lastChar = string[index];
    }
  }
  return console.log(newString.join(""));
}
