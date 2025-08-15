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

// TestCase - 1
const finalResult = resultReport([]);

// TestCase - 2
const finalResult2 = resultReport([98, 87, "eksho", 91, 92, 33, 87]);

// TestCase - 3
const finalResult3 = resultReport([99, 87, 67, 12, 87]);

// TestCase - 4
const finalResult4 = resultReport([99]);

// TestCase - 5
const finalResult5 = resultReport(100);

// Output
console.log(
  finalResult,
  finalResult2,
  finalResult3,
  finalResult4,
  finalResult5
);
