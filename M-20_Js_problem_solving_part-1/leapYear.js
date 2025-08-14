/** Simple logic for Leap year ----
 *  Year will be a leap year if the year is divisible by 4
 *
 */

// Very Simple formula

function isLeapYear1(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const isLeap = isLeapYear1(2052);
console.log(isLeap);

// Little bit Complex but more Accurate formula -----------------------------------------------------------
/**
 *  Logic-1 : Those year that is not divisible by 100 and if the year is divisible by 4, then it will be a leap year.
 *
 * Logic-2 : If the year is divisible by 400 then it is a leap year else it is not a leap year.
 *
 */

function isLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const isleapyear = isLeapYear(2100);
const isleapyear2 = isLeapYear(2400);
const isleapyear3 = isLeapYear(1900);
const isleapyear4 = isLeapYear(2052);
console.log(isleapyear, isleapyear2, isleapyear3, isleapyear4);
