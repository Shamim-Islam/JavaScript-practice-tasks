/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 5;
let IsStudent = false;
let fare = 800;

if (age < 10) {
  console.log("Free Ticket for Childrens");
} else if (IsStudent === true) {
  fare = fare * 0.5; // 50% discount for students
  console.log("Student Ticket Fare : " + fare + " Tk");
} else if (age >= 60) {
  fare = fare * 0.85; // 15% discount for senior citizens
  console.log("Senior Citizen Ticket Fare : " + fare + " Tk");
} else {
  console.log("Regular Ticket Fare : " + fare + " Tk");
}
