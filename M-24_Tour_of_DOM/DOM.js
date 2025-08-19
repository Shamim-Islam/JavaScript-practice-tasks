// Tour of DOM (Document Object Model)

// Appy for findout all the paragraph
const paragraphList = document.getElementsByTagName("p");
// console.log(paragraphList);

// for h1 tags
const headingList = document.getElementsByTagName("h1");
// console.log(headingList);

for (const p of paragraphList) {
  //   console.log(p.innerText);
}

for (const h1 of headingList) {
  //   console.log(h1.innerText);
}

// using specific Id name

const teamHeading = document.getElementById("teamHeading");
console.log(teamHeading.innerText);
