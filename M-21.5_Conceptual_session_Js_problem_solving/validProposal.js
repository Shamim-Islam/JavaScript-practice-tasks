// Problem-04: Valid Proposal

function validProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }

  if (
    person1.gender !== person2.gender &&
    Math.abs(person1.age - person2.age) <= 7
  ) {
    return true;
  } else {
    return false;
  }
}

// TestCase - 1
const proposal = validProposal(
  { name: "Rahul", gender: "male", age: 28 },
  { name: "Joya", gender: "female", age: 21 }
); // true

// TestCase - 2
const proposal2 = validProposal(
  { name: "milon", gender: "male", age: 20 },
  { name: "sumi", gender: "female", age: 25 }
); // true

// TestCase - 3
const proposal3 = validProposal(
  { name: "shuvo", gender: "male", age: 20 },
  { name: "joy", gender: "male", age: 25 }
); // false

// TestCase - 4
const proposal4 = validProposal(
  { name: "toya", gender: "female", age: 20 },
  { name: "kader", gender: "male", age: 25 }
); // true

// TestCase - 5
const proposal5 = validProposal(
  { name: "toya", gender: "female", age: 24 },
  { name: "bjoy", gender: "male", age: 32 }
); // false

// TestCase - 6
const proposal6 = validProposal("Mizan", {
  name: "mitu",
  gender: "male",
  age: 32,
}); // Invalid

// TestCase - 7
const proposal7 = validProposal(
  { name: "mitu", gender: "male", age: 32 },
  "Mizan"
);

console.log(
  proposal,
  proposal2,
  proposal3,
  proposal4,
  proposal5,
  proposal6,
  proposal7
);
