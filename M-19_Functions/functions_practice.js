// // first function

// function fanOffKor() {
//   console.log("bosa theke uthe dara");
//   console.log("walk towards the switch");
//   console.log("Click the switch to off of the Fan");
// }

// function brushTeeth() {
//   console.log("Pick up the brush");
//   console.log("add paste");
//   console.log("2 min goso and goso and fena felo");
// }

// // fanOffKor();
// // brushTeeth();

// // Square -------------------------------------------------------------

// function square(number) {
//   console.log("value of the number parameter", number);
//   const borgo = number * number;
//   console.log(borgo);
// }

// // square(4);
// // console.log("------------------------");
// // square(12);
// // console.log("------------------------");
// // square(405);

// // adding parameters

// // function add(num1, num2) {
// //   const sum = num1 + num2;
// //   console.log(sum);
// // }

// // add(5, 12);
// // add(532, 135);

// // function addAll(a, b, c, d, e) {
// //   const total = a + b + c + d + e;
// //   console.log(a, b, c, d, e);
// //   console.log(total);
// // }

// // addAll(5, 8, 55, 777);

// //

// function doubleIt(number) {
//   const doubleIt = number * 2;
//   console.log(number, doubleIt);
// }

// // console.log("i will call the function");
// // doubleIt(15);
// // console.log("-------------------------");
// // doubleIt(88);
// // console.log("-------------------------");
// // doubleIt(873);
// // console.log("-------------------------");

// // const number = 55;
// // doubleIt(number);
// // const money = 112;
// // doubleIt(money);

// function difference(num1, num2) {
//   const diff = num1 - num2;
//   console.log(num1, num2, " so diffrence is ", diff);
// }

// const fatherAge = 40;
// const myAge = 10;

// // difference(fatherAge, myAge);

// function tenTimes(number) {
//   const result = number * 10;
//   return result;
//   console.log(result);
// }

// const output = tenTimes(10);
// // console.log(output);

// function add(price1, price2) {
//   const total = price1 + price2;
//   return total;
// }
// const bill = add(5, 80);

// function add2(price1, price2) {
//   return price1 + price2;
// }

// const bill2 = add(5, 80);

// // console.log(bill, bill2);

// function doMath(num1, num2) {
//   const sum = num1 + num2;
//   const diff = num1 - num2;
//   const multiply = sum * diff;
//   const result = multiply / 2;
//   return result;
// }

// const result = doMath(10, 5);
// console.log(result);

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(5));
// console.log(isEven(110));

// function isOdd(number) {
//   if (number % 2 === 1) {
//     return true;
//   }
//   return false;
// }

// console.log(isOdd(10));
// console.log(isOdd(7));

// Different types of parameters for a functions

// function evenSizedString(str) {
//   const size = str.length;
//   console.log(str, size);
//   if (size % 2 === 0) {
//     console.log("even size");
//     return true;
//   } else {
//     console.log("odd number");
//     return false
//   }
// }

// evenSizedString("Dhaka");
// evenSizedString("faka");

// function doubleOrTriple(number, doD)

// function doubleOrTriple(number, doDouble) {
//   if (doDouble === true) {
//     const result = number * 2;
//     return result;
//   } else {
//     const result2 = number * 3;
//     return result2;
//   }
// }

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

// function numbersOfElements(numbers) {
//   const len = numbers.length;
//   return len;
// }

// numbersOfElements([13, 45, 78, 40, 1254]);

/**
 * Objective: write a function to give me the sum of all numbers in an array
 * */

// function sumOfNumbers(numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     console.log(number);
//     sum = sum + number;
//   }
//   return sum;
// }

// const nums = [55, 62, 13, 6, 7];
// const sum = sumOfNumbers(nums);
// console.log("Sum of numbers is ", sum);

// Create function that will return only the even numbers
// return the sum of even numbers

function evenNumbersOnly(numbers) {
  const even = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      // console.log(number);
      even.push(number);
    }
  }
  return even;
}

const numbers = [5, 8, 91, 24, 6];
const evens = evenNumbersOnly(numbers);
// console.log("even numbers are : ", evens);

function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      sum = sum + number;
    }
  }
  return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log("sum of even number :", sum);
