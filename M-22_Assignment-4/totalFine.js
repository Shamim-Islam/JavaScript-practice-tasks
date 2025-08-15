//Problem-01 : Train TT's Fine Calculator

function totalFine(fare) {
  // input validation
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  } else {
    // formula
    let fine = fare + fare * (20 / 100) + 30;
    return fine;
  }
}

// testing with some provided sample inputs
console.log(totalFine(200)); // 270
console.log(totalFine(0)); // Invalid
console.log(totalFine(50)); // 90
console.log(totalFine(552)); // 692.4
console.log(totalFine(-35)); // Invalid
console.log(totalFine("65")); // Invalid
console.log(totalFine("Gorib tai ticket katinai")); // Invalid
