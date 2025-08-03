const country = "Bangladesh";
const division = "Dhaka";
const district = `nowkhali`;
const thana = new String("Ashulia");

// console.log(thana);

// length of string
// console.log(country.length); // string

// index number of string
// console.log(country[1]);

// const school = "RAJ UK Uttara Model School";
// const college = "bepza college";

// console.log(school);
// console.log(school.toLowerCase());

// console.log(college);
// console.log(college.toUpperCase());

// const subject = "Javascript";
// const sub2 = "javaScript";

// const drink = " water";
// const liquid = "water  ";

// if (drink.trim() === liquid.trim()) {
//   console.log("ami ektu pore ghurte jamu");
// } else {
//   console.log("ami ektu pore ghurte jabo naaaaaaaaaaaaaaaaaaaaaaaaaaaa");
// }

// const address = "andorkilla";
// const part = address.slice(2, 9); // start index, end index
// // console.log(part);

// const sentence =
//   "I am a student of, programming hero. I love, programming hero.";
// console.log(sentence.split("a"));

// const realFrnd = ["Rafiq", "Rifat", "Raihan", "Raihan", "Raihan", "Raihan"];
// console.log(realFrnd.join('*'))

// const first = "abid";
// const last = "hasan";
// const fullName = first.concat(" ").concat(last);
// // console.log(fullName);
// console.log(first.includes('x'))

const sentence = "i am learning javascript";
// const sentence = "donuld trump";
// let reverse = " ";
// for (const letter of sentence) {
//   // console.log(letter);
//   reverse = letter + reverse;
// }
// // console.log(reverse);
// let rev = " ";
// for (let i = 0; i < sentence.length; i++) {
//   //   console.log(sentence[i]);
//   const ltr = sentence[i];
//   rev = ltr + rev;
// }
// console.log(rev);
// let reverse = sentence.split("").reverse().join("");
// let reverse = sentence.reverse();

// console.log(reverse);

// object

// const age = 21;
// const name = 'shamim';
// const isPassed = true;
// let idDeveloper;
// const person = '';

// console.log(person)

// console.log(person);

// let str = "hello";
// let reversed = "";

// for (let i = 0; i < str.length; i++) {
//   reversed += str[i];
// }

// console.log(reversed);

// let str = "hello";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// console.log(reversed);

// let rev = " ";
// for (let i = 0; i < sentence.length; i++) {
//   //   console.log(sentence[i]);
//   const ltr = sentence[i];
//   rev = ltr + rev;
// }
// console.log(rev);

// let rev = " ";
// for (let i = 0; i < sentence.length; i++) {
//   //   console.log(sentence[i]);
//   const ltr = sentence[i];
//   rev = ltr + rev;
// }
// console.log(rev);

// const person = {
//   name: "shamim",
//   age: 28,
//   profession: "police",
//   salary: 25000,
//   isMarried: true,
// };

// console.log(person.age);

// const income = person.salary;
// console.log(income);
// console.log(person["profession"]);
// console.log(person["salary"]);

// const keys = Object.entries(person);
// console.log(keys);
// person.age = 30;
// console.log(person.age);
// delete person.isMarried;
// console.log(person);
// delete person.salary;
// console.log(person)

const person = {
  name: "shamim",
  age: 28,
  profession: "police",
  salary: 25000,
  isMarried: true,
};

// for (const key in person) {
//   console.log(key, person[key]);
// }

const keys = Object.keys(person);
console.log(keys);

for(const key of keys) {
  console.log(key, person[key])
}
