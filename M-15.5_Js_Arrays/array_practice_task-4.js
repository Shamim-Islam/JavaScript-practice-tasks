// Checking if it's an Array
// Instructions:

// 1. Create different variables, each containing either an array or a non-array value.

// 2. Now use isArray to check if each variable is an array.

// 3. Print a message to the console indicating whether each variable is an array or not.

// Diferent types of variables

let books = ["html", "css", "javascript"];
let name = "rahim";
let age = 25;
let data = { subject: "Math", marks: 90 };
let scores = [90, 85, 78];
let isActive = true;
let empty = [];

console.log(
  Array.isArray(books) ? "Books is an array" : "Books is not an array"
);

console.log(Array.isArray(name) ? "Name is an array" : "Name is not an array");

console.log(Array.isArray(age) ? "Age is an array" : "Age is not an array");

console.log(Array.isArray(data) ? "Data is an array" : "Data is not an array");

console.log(Array.isArray(scores) ? "Score is an array" : "Score is not an array");

console.log(Array.isArray(isActive) ? "isActive is an array" : "isActive is not an array");

console.log(Array.isArray(empty) ? "empty is an array" : "empty is not an array");
