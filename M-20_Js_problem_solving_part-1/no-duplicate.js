// Array has some duplicate elements, i have to find out those items and kickout from this array

const biryaniKhor = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "dabul",
  "kabul",
  "cabul",
];
const number = [1, 5, 7, 51, 84, 51, 7, 65, 42, 38, 65, 38];

function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

console.log(noDuplicate(biryaniKhor));
