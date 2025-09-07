let name = "nilu";
let age = 29;

let person = {
  name,
  age,
  roll: 39,
  getInfo() {
    console.log(`My name is ${person.name}`);
  },
};

// person.getInfo();

// keys - get keys as array
const keys = Object.keys(person);
// console.log(keys);

// values - get values as array
const values = Object.values(person);
// console.log(values);

// Entries - get key value pair as array of array
const entries = Object.entries(person);
// console.log(entries);

// loop iterate -- two ways
//using keys
for (const key of keys) {
  //   console.log(key, ":", person[key]);
}

// for in
for (const key in person) {
  //   console.log(key, ":", person[key]);
}

// Seal, freeze and delete
const obj2 = {
  country: "bangladesh",
  color: "green",
};

// Delete
delete obj2.color;
// console.log(obj2);

// freeze
// Object.freeze(obj2); // Prevent insert, delete and update
// obj2.country = "Uganda";

// console.log(obj2);

// Seal
Object.seal(obj2); // Prevent insert, delete and update
obj2.country = "Uganda";

console.log(obj2);
