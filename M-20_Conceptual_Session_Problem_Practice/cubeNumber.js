

// Problem no-1 (Basic math)

function cubeNumber(number) {
  //input validation
  if (typeof number !== "number" || number < 0) {
    return "Invalid Input. Please provide the valid number.";
  }
  let cube = number ** 3;
  return cube;
}

const cnumber = cubeNumber(10);
console.log(cnumber);
