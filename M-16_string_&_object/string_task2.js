// Js strig problem no-3

let text = "JavaScript is An Amazing and powerfull Language";

//Converts to lowercase
let lowertxt = text.toLowerCase();

// check if all vowels are present
let hasAllVowels =
  lowertxt.includes("a") &&
  lowertxt.includes("e") &&
  lowertxt.includes("i") &&
  lowertxt.includes("o") &&
  lowertxt.includes("u");

if (hasAllVowels === true) {
  console.log("The string contains all the vowels: a, e, i, o, u");
} else {
  console.log("The string does not contain all the vowels");
}
