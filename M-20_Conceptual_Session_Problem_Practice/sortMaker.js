// Problem no-3

function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid input";
  } else if (arr[0] === arr[1]) {
    return "equal";
  } else if (arr[0] > 0 && arr[1] > 0) {
    return arr.sort((a, b) => b - a);
  }
}

const arr = [1, -2];
console.log(sortMaker(arr));
