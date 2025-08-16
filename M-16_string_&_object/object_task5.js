// Object task - 5

// Loop through an object and print the key-value pairs with their types

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (let key in myObject) {
  let valueWithType = typeof myObject[key];
  let output = `Key: ${key} | type: ${valueWithType}`;
  console.log(output);
}
