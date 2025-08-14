function oddAverage(numbers) {
  let oddNumber = [];
  for (let number of numbers) {
    if (number % 2 === 1) {
      oddNumber.push(number); // oddNumber is an array that contains only odd number
    }
  }

  const count = oddNumber.length;
  // sum of odd numbers
  let sum = 0;
  for (let num of oddNumber) {
    sum += num;
  }
  //   console.log(sum, count);
  const avg = sum / count;
  //   console.log(`oddAverage number is: ${avg}`);
  return `oddAverage number is: ${avg.toFixed(2)}`;
}

const numbers = [33, 42, 61, 58, 75, 44, 99, 45, 62, 51];
const oddavg = oddAverage(numbers);
console.log(oddavg);
