/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum = 0;
let number = 1;

while (true) {
  sum = sum + number;
  if (sum >= 100) {
    break;
  }
  number++;
}
console.log("the sum is: " + sum); //105
console.log("the number is: " + number); // 14
