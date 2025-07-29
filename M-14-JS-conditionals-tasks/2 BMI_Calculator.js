/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

//User input: ask the user for weight and height
let weight = prompt("Enter your weight in kg:");
let height = prompt("Enter your height in meters:");

//In normal case
//let height = 1.76; // in meters
//let weight = 95; // in kilometers

//Convert the input strings to numbers
weight = parseFloat(weight);
height = parseFloat(height);

//BMI calculator formula- BMI = weight (kg) / (height (m))^2
let BMI = weight / (height * height);

if (BMI < 18.5) {
  console.log("you are underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("You are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("You are overweight");
} else {
  console.log("You are obese");
}
