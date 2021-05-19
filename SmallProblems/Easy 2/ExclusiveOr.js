function xor(argument1, argument2) {
  if (Boolean(argument1) === true && Boolean(argument2) === false) {
    return true;
  } else if (Boolean(argument1) === false && Boolean(argument2) === true) {
    return true;
  } else {
    return false;
  }
}