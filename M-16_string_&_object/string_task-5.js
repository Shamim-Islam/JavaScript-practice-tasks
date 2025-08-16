// String problem no-4

let str = "hello world";

// Way-1

const capitalized = str
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

console.log(capitalized);

// way-2

let str2 = "hello world from javascript";
let words = str.split(" ");
let result = "";

for (let word of words) {
  result += word[0].toUpperCase() + word.slice(1) + " ";
}

console.log(result.trim());
