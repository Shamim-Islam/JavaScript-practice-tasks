// Array looping- using for loop

const fruits = ["Apple", "Bannna", "Anar", "Watermelon", "Coconut"];

for (let i = 0; i < fruits.length; i++) {
  //   console.log(fruits[i]);
}

// using while loop

let j = 0;

while (j < fruits.length) {
  //   console.log(fruits[j]);
  j++;
}

const prices = [15, 80, 49, 78, 26, 44];
let n = 0;
while (n < prices.length) {
  //   console.log(prices[n]);
  n++;
}

// array reversed - Way no - 1

const numbers = [1, 2, 3, 4, 5, 6, 7];
const reversed = [];

for (let k = 0; k < numbers.length; k++) {
  //   console.log(numbers[k]);
  //   reversed.unshift(numbers[k]);
}

// console.log(reversed);

// Way no - 2

for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}
// console.log(reversed);

// For of loop

for (const num of numbers) {
  //   console.log(num);
  //   num.reverse();
  //   console.log(num);
}

const result = numbers.reverse();
// console.log(result);

// sorting array

const number = [6, 1, 8, 2, 3, 5];
number.sort();
// console.log(number);

let num2 = [1, 5, 100, 15, 8, 2, 28];

num2.reverse();
// console.log(num2);

// using function
const sorted_num = num2.sort(function (a, b) {
  return b - a;
});

// console.log(sorted_num);

// Object array

const employees = [
  { name: "Shamim", designation: "web developer", salary: 25000 },
  { name: "Niloy", designation: "Accountant", salary: 29000 },
  { name: "Mishu", designation: "Digital Merketer", salary: 30000 },
];

// console.log(employees[0].salary);
// console.log(employees[2].designation);

for (const emp of employees) {
  //   console.log(emp.name, emp.salary);
}

// Array of Array ----- 2D Array

const exam_marks = [
  [98, 52, 44, 36, 76],
  [87, 91, 35, 84, 66],
  [45, 31, 19, 28, 72],
  [12, 88, 64, 73, 48],
];

// console.log(exam_marks);
// console.log(exam_marks[0]);
// console.log(exam_marks[0][0]);
const first_class_marks = exam_marks[0];
// console.log(first_class_marks[0]);

exam_marks[0][1] = 66;
exam_marks[1].pop();
exam_marks[1].push(44);
// console.log(exam_marks);

// Copy Array elements to another array

// using for..of loop

const products = [25, 25, 25];
const comp_products = [];

for (const product of products) {
  comp_products.push(product);
}
// console.log(product);

const num5 = [1, 2, 3, 4, 5];
const new_num = Array.from(num5);
const new_array = [].concat(num5);
const new_arr = [...num5];

new_num.push(8);
new_array.unshift(5);
new_arr.shift();

console.log(num5);
console.log(new_num);
console.log(new_array);
console.log(new_arr);
