// normal way

const numbers = [2, 4, 8, 3, 5];
// const doubled = [];

// for (const num of numbers) {
//   const result = num * 2;
//   doubled.push(result);
// }

// using map with function

// const doubleIt = (x) => x * 2;
// const doubled = numbers.map(doubleIt);

// more short way

const doubled = numbers.map((x) => x * 2);
const fiveTimes = numbers.map((num) => num * 5);
const squared = numbers.map((num) => num * num);

// console.log(doubled);
// console.log(fiveTimes);
// console.log(squared);

// in string
const friends = ["piu", "tavel", "nvel", "kodbel"];
const nameLengths = friends.map((name) => name.length);
const firstLetters = friends.map((name) => name[0]);
const toUppercase = friends.map((name) => name.toUpperCase());

console.log(toUppercase);
