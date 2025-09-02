const getTax = (amount, taxRate) => (amount * taxRate) / 100;
const add = (p, q) => p + q;

// single parameter
const getSquare = (x) => x * x;
const getHalf = (num) => num / 2;
const firstElement = (nums) => nums[0];
const logIt = () => console.log(78);

console.log(getSquare(8));
console.log(getHalf(18));
console.log(firstElement([29, 65, 77]));
logIt();
console.log(logIt());
