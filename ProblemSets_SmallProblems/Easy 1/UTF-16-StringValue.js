
function utf16Value(string) {
  let sum = 0;
  for (let index = 0; index < string.length; index++) {
    sum += string.charCodeAt(index);
  }
  return sum;
}
