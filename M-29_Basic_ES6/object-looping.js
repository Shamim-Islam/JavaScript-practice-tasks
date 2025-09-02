// array looping using for of

const numbers = [1, 2, 4, 1, 48, 66, 44];
for (const number of numbers) {
  //   console.log(number);
}

// Object looping using - for in loop

const employee = {
  name: "Raja Rani",
  designation: "QA",
  salary: 20000,
  experience: 1,
  age: 22,
};

for (const key in employee) {
  const value = employee[key];
  console.log(key, value);
}

// Object looping using - for of looping

const keys = Object.keys(employee);

for (const key of keys) {
  const value = employee[key];
  console.log(key, value);
}
