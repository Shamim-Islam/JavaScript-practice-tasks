var a = isNaN("11"); //false
var a = isNaN(2 - 10); //false

console.log(a);

/* -- Short Explanation --


isNaN(value) checks if the value is "Not a Number"

Returns:

true → if it's Not a Number

false → if it's a Number

# Example-1

* "11" is a string, but it can be converted into a number.
So it’s not NaN → result is false.

# Example-2

* 2 - 10 is -8, which is a valid number.
So again, not NaN → result is false.

*/
