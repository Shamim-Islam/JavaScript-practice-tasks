/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let sum = 0;

for (let i = 91; i <= 129; i++) {
  if (i % 2 !== 0) {
    // console.log(i);
    sum += i;
  }
}
console.log("Sum of odd numbers from 91 to 129 is : " + sum);

/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let sumEven = 0;

for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    // console.log(i);
    sumEven += i;
  }
}

console.log("Sum of even numbers from 51 to 85 is : " + sumEven);
