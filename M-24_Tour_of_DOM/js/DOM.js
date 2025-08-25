//

// ---------------------------------------------------------------------------------------

// Tour of DOM (Document Object Model)
// console.log("Document Object Model");

// console.log(document);

// 1. document.getElementsByTagName - findout any tagname using this ============================================================

// findout all h4 tags
const tagNames = document.getElementsByTagName("h4");
// console.log(tagNames)

for (const tag of tagNames) {
  //console.log(tag.innerText)
}

// findout all p tags

const paragraphTag = document.getElementsByTagName("p");

for (const p of paragraphTag) {
  // console.log(p.innerHTML)
}

// 2. document.getElementById -- findout any element using Id ==================================================================
//console.log('document.getElementById -- findout any element using Id')

const usingId = document.getElementById("food-title");
//console.log(usingId.innerHTML)

usingId.innerText = "food i want to eaaaaaaaaaaaaaaattttttttttttttttttttttt";

// 3. document.getElementsByClassName -- findout any element using classname ===================================================
//console.log('document.getElementsByClassName -- findout any element using classname')

const usingclass = document.getElementsByClassName("foreign");
//console.log(usingclass);

for (const element of usingclass) {
  //  console.log(element.innerText)
}

// 4. document.querySelectorAll -- findout any element using queryselector ===================================================

const query = document.querySelectorAll("#food span");
//console.log(query)

for (const span of query) {
  //console.log(span.innerText)
}

// Dynamic style ================================================================================

usingId.style.backgroundColor = "lightgreen";
usingId.style.border = "2px solid red";
usingId.style.padding = "20px";
usingId.style.marginLeft = "30px";
usingId.style.fontSize = "30px";
usingId.style.fontWeight = "700";

// classList ------ add/remove =====================================================

usingId.classList.add("big");
usingId.classList.remove("big");

// getAttribute / setAttribute ================================================
usingId.getAttribute("id");
usingId.getAttribute("class");

usingId.setAttribute("title", "title tooltip using js");

// innerHTML / innerText

document.getElementById("food").innerHTML;
document.getElementById("food").innerText;

// const sections = document.getElementsByTagName("section");
const sections = document.querySelectorAll("section");
// console.log(sections);
// for (const section of sections) {
//   console.log(section);
//   section.style.backgroundColor = "lightblue";
//   section.style.border = "3px solid red";
//   section.style.marginBottom = "100px";
//   section.style.borderRadius = "50px";
//   section.style.padding = "40px";
// }

// Dynamic class ====================================================================================

// for (const section of sections) {
//   console.log(section);
//   section.classList.add("section-card");
// }

// childNodes ========================================================================================

// document.getElementById("food").childNodes[0].childNodes[1];
// document.getElementById("food").childNodes[5].childNodes[3].parentNode
//   .parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

// Create element ==========================================================================================

// Create element and set innerText or innerHtml

document.createElement("p");
document.createElement("li");

const newPlace = document.createElement("li");
newPlace.innerText = "Himchori";

console.log(newPlace);

// find the parent where you will add the child

const tourPlace = document.getElementById("tour-places");

// append the child to the parent
tourPlace.appendChild(newPlace);

