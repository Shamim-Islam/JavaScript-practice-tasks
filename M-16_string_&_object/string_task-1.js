


// Js strig problem no-1

let ltr = "javascript is an awesome";
let count = 0;

// way-1
// ltr = ltr.includes('a')
// ltr = ltr.match(/a/g).length;
// console.log(ltr);

// way-2
for (let char of ltr) {
  if (char.toLowerCase() === "a") {
    count++;
  }
}

console.log(`The letter 'a' appears ${count} times.`);

// way-3

let cnt = ltr
  .toLowerCase()
  .split("")
  .filter((char) => char === "a").length;

console.log(`The letter a-- appers ${cnt} times.`);
