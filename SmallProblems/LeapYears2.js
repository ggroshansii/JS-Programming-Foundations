

function isLeapYear(year) {
  let leapYear;

  if (year <= 1752) {
    if (year % 4 === 0) {
      leapYear =  true;
    } else {
      leapYear = false;
    }
  } else if (year > 1752) {
    if (year % 400 === 0) {
      leapYear =  true;
    } else if (year % 100 === 0) {
      leapYear =  false;
    } else {
      leapYear =  year % 4 === 0;
    }
  }
  return leapYear;
}
