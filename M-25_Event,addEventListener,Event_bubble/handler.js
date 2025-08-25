// update text

document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    // console.log("button click");
    const pageTitle = document.getElementById("page-title");
    // console.log(pageTitle.innerText);
    pageTitle.innerText = "Hey man. Title is updated";
  });

// Another example

document.getElementById("btn-login").addEventListener("click", function () {
  const updateTxt = document.getElementById("txt");
  updateTxt.innerText = "user logged in successfully";
});

// take a user input and displaying this on screen

// 1. set event listener

document.getElementById("btn-update").addEventListener("click", function () {
  // 2. get the text from the input field
  const nameInput = document.getElementById("input-name");
  const name = nameInput.value;
  //   console.log(name);
  // 3. set the value of input field to text
  const updateTxt = document.getElementById("updateTxt");
  updateTxt.innerText = name;
});
