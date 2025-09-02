// function declaration
function add(num1, num2) {
  return num1 + num2;
}

// function expression
const addition = function (num1, num2) {
  return num1 + num2;
};

// arrow function
const add2 = (num1, num2) => num1 + num2;
const multiply = (a, b) => a * b;
const isFirstBig = (x, y) => x > y;

const sum = add2(17, 13);
const mult = multiply(5, 7);
const isBig = isFirstBig(45, 5);
// console.log(sum);
// console.log(mult);
// console.log(isBig);

// Multi line arrow function
const doMath = (x, y) => {
  const makeDouble = x * 2;
  const againDouble = y * 2;
  const result = makeDouble + againDouble;
  return result;
};

console.log(doMath(5, 7));
