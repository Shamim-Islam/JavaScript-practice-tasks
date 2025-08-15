// Problem-01 : Train TT's Fine Calculator

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

// Problem-02 : Clean & Capitalize Characters

function onlyCharacter(str) {
  // string validation
  if (typeof str !== "string") {
    return "Invalid";
  }
  // removing spaces and make it uppercase
  let strWithoutSpace = str.split(" ").join("");
  let strUppercase = strWithoutSpace.toUpperCase();

  return strUppercase;
}

// Problem-03 : FIFA Best Team Award

function bestTeam(player1, player2) {
  // object validation
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }

  const team1 = player1.foul + player1.cardY + player1.cardR;
  const team2 = player2.foul + player2.cardY + player2.cardR;

  if (team1 < team2) {
    return player1.name;
  } else if (team1 === team2) {
    return "Tie";
  } else {
    return player2.name;
  }
}

// Problem-04: Same Same But Different

function isSame(arr1, arr2) {
  // array validation
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return "Invalid";
  }

  if (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  ) {
    return true;
  } else {
    return false;
  }
}

// Problem-05: Exam Result Report Generator

function resultReport(marks) {
  // type validation
  if (Array.isArray(marks) !== true) {
    return "Invalid";
  }
  // empty array validation
  if (marks.length === 0) {
    return `{ finalScore: 0, pass: 0, fail: 0 }`;
  }
  let sum = 0;
  let pass = 0;
  let fail = 0;

  for (let mark of marks) {
    // array value validation
    if (typeof mark !== "number") {
      return "Invalid";
    }

    // sum of marks
    sum += mark;

    // pass/fail validation
    if (mark >= 40) {
      pass++;
    } else {
      fail++;
    }
  }

  // average marks
  let avgScore = sum / marks.length;
  let finalScore = Math.round(avgScore);

  return `{ finalScore: ${finalScore}, pass: ${pass}, fail: ${fail} }`;
}
