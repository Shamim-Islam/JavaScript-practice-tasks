// Problem no-2

function matchFinder(string1, string2) {
  // Input missing check
  if (string1 === undefined || string2 === undefined) {
    return "Please provide both valid inputs.";
  }

  // Input type check

  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Both input must be string";
  }

  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

const mFinder = matchFinder("John Doe", 84);
console.log(mFinder);
