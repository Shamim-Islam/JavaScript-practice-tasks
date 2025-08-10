// String task problem no -3

// Way-1 ---- using replace()

let txt1 = "xylophone and XEROX";

txt1 = txt1.replace(/x/g, "y").replace(/X/g, "Y");

console.log(txt1);

// Way-2 ------ Using split(), map(), join()

let txt2 = "Mix of x and X";

txt2 = txt2
  .split("")
  .map((char) => {
    if (char === "x") return "y";
    if (char === "X") return "Y";
    return char;
  })
  .join("");

console.log(txt2);

// Way-3 -------- Using loop

let txt3 = "eXtra xerox";
let result = "";

for (let char of txt3) {
  if (char === "x") result += "y";
  else if (char === "X") result += "Y";
  else result += char;
}

console.log(result);

// Way-4 -----

let txt4 = "eXample of a miXed xX string";

//check fi x or X exists
if (txt4.includes("x") || txt4.includes("X")) {
  //Replace all x with y and X with Y
  let updateTxt = txt4.replaceAll("x", "y").replaceAll("X", "Y");
  console.log(updateTxt);
} else {
  console.log("No x or X found in this string.");
}
