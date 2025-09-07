const student = {
  name: "Rafid",
  1: 50,
  marks: 90,
  "home-address": "kochu khet",
};
k
// dot notation
const studentName = student.name;
// bracket notation
const studentName2 = student["name"];

console.log(student["home-address"]);k

for (const key in student) {
  const value = student[key];
}

const propName = "marks";
console.log(student[propName]);
