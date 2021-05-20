
function joiningArrayToNumber(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let value = 0;
  let arr = string.split("").map(char => DIGITS[char]);
  arr.forEach(digit => (value = (value * 10) + digit));
  return value;
}

function stringToSignedInteger(string) {
  if (string[0] === "-") {
    string = string.slice(1);
    return -joiningArrayToNumber(string);
  } else if (string[0] === "+") {
    string = string.slice(1);
    return joiningArrayToNumber(string);
  } else {
    return joiningArrayToNumber(string);
  }
}

