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

// testing with some provided sample inputs
console.log(onlyCharacter("  h e llo wor   ld"));
console.log(onlyCharacter("Cy   bar- At  tac k  "));
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
console.log(onlyCharacter("Serv er : : Do wn"));
console.log(onlyCharacter(["hack", "me"]));
console.log(onlyCharacter(true));
