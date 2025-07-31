/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// Grade Calculator

//Take input from users
let score = prompt("Enter the students score 0-100: "); // wont be work in console environment

// For testing purposes, we can set a score directly
let score = 49;

//convert score to a number
score = Number(score);

if (score >= 90 && score <= 100) {
  console.log("Your grade is A");
} else if (score >= 80 && score < 90) {
  console.log("Your grade is B");
} else if (score >= 70 && score < 80) {
  console.log("Your grade is C");
} else if (score >= 60 && score < 70) {
  console.log("Your grade is D");
} else {
  console.log("Your grade is F");
}
