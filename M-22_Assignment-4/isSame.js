// Problem-04: Same Same But Different

function isSame(arr1, arr2) {
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return "Invalid";
  }

  if (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  ) {
    return true;
  } else {
    return false;
  }
}

const result = isSame([1, 2, 3], [1, 2, 3]); // true
const result2 = isSame([34, 5, 7, 9], [34, 5, 7]); // false
const result3 = isSame([1, undefined, 3], [1, null, 3]); // false
const result4 = isSame([1, 4, 5], [1, 4, 5]); // true
const result5 = isSame([1, "4", 4], [1, 4, 4]); // false
const result6 = isSame([2, 5, 6], 256); // Invalid
const result7 = isSame({ data: [2, 5, 6] }, [2, 5, 6]); // Invalid

console.log(result, result2, result3, result4, result5, result6, result7);
