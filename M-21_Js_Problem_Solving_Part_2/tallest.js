//

const heights = [65, 66, 68, 72, 78, 60, 65, 67, 79, 126];

function getMax(numbers) {
  let max = numbers[0];
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

console.log(getMax(heights));
