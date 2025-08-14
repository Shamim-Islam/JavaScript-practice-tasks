// Height -- inch to feet converter

// 12 inch 1 feet

function inchToFeet(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = `${feetNumber} ft ${inchRemaining} inch`;
  return result;
}

const niloysHeight = inchToFeet(70);
// console.log(niloysHeight);

// Miles to km ----------------- 1.60934

function milesToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}

const mtk = milesToKilometer(10);
console.log(mtk);

// Km to miles ---------------- 1km = 0.621371 mile

function kilometerToMile(kilo) {
  const mile = kilo * 0.621371;
  return mile;
}

const ktm = kilometerToMile(10);
console.log(ktm);
