
function findLength(str) {
  if (typeof str === 'string') {
    return str.length;
  } else {
    return undefined;
  }
}

function shortLongShort(str1, str2) {
  let length1 = findLength(str1);
  let length2 = findLength(str2);

  if (length1 > length2) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}
