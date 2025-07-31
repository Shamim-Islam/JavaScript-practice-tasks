/*


// Basic for loop
for (let i = 0; i <= 10; i++) {
  console.log("Iteration number: " + i);
}


// Basic while loop

let i = 10;
while (i <= 30) {
  console.log("Current number: " + i);
  i++;
}



// do while loop

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);



// for in loop
const person = {
  name: "John",
  age: 30,
  city: "dhaka",
};

for (let key in person) {
  //   console.log(key);
  console.log(person[key]);
}
*/

// for of loop
/* const numbers = [10, 20, 30, 40, 50];
for (let num of numbers) {
  console.log(num);
}
 */

// break

/* for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log("Breaking the loop at i = " + i);
} */

/* let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
} */
/* 
let num = 1;
let sum = 0;
while (num <= 10) {
  console.log(num);
  sum += num;
  num++;
  console.log("Current sum: " + sum);
} */

/* let i = 1;
while (i <= 20) {
  console.log(i);

  if (i % 2 === 0) {
    console.log("Even number: " + i);
  }
  i++;
}
 */

//even number

/* for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
 */

// sum of numbers using for loop

/* let sum = 0;

for (let i = 11; i <= 20; i++) {
  sum += i;
  console.log("Current number: " + i);
  console.log("Current sum: " + sum);
}
console.log("Current sum: " + sum); */

// decremental for loop

/* for (let i = 10; i >= 0; i--) {
  console.log("Current number: " + i);
} */

// multiplication table of 5
/* for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + 5 * i);
  console.log(`7 x ${i} = ${7 * i}`);
} */

// sum of number 1 to 100
/* let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
  console.log("Sum of numbers from 1 to 100: " + sum);
}
console.log("Sum of numbers from 1 to 100: " + sum);
 */

// factorial of 5
/* let fact = 1;
for (let i = 1; i <= 50; i++) {
  fact *= i;
  console.log("Factorial of " + i + " is: " + fact);
}
 */

// decremental while loop
/* let i = 20;
while (i >= 10) {
  console.log("Current number: " + i);
  i--;
}
 */

// odd number

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log("Odd number: " + i);
//   }
// }

// give me the list of numbers between 1 to 30 divisible by 5

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("Number divisible by 5: " + i);
//   }
// }

/* for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
} */

// break

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
