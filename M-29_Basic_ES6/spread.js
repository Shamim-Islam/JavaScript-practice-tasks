// const first = [1, 2, 3, 4, 5, 6];
// const second = first;
// second.push(8);
// console.log(first);

const first = [1, 2, 3, 4, 5, 6];
const second = [...first];
const third = [0, ...first, 97, 45, 12];
second.push(8);
// console.log(first);
// console.log(second);

// console.log(third);

//copy array
const numbers = [4, 119, 1, 7, 3];
const numbers2 = numbers;
numbers2.push(135);
// console.log(Math.max(...numbers2));
console.log(numbers);
console.log(numbers2);

// merge array
const a = [1, 2, 3];
const b = [4, 5, 6];
const merge = [...a, ...b];
console.log(merge);

// spread with objects
const person = { name: "shamim", age: 30 };
const updated = { ...person, country: "bangladesh" };
console.log(updated);
