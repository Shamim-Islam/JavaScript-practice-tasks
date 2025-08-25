console.log("kireeeeeeeeeeeeeeeeeeeeeeeeee");

// option 1 to handle event

function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 2

const btnMakeBlue = document.getElementById("btn-make-blue");
// console.log(btnMakeBlue)

btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

// option 3 : get element by id and then set onclick to a function

const btnMakePurple = document.getElementById("btn-make-purple");
// console.log(btnMakeBlue);

btnMakePurple.onclick = makePurple;

function makePurple() {
  document.body.style.backgroundColor = "purple";
}

// option 4 : addEventListener

document
  .getElementById("btn-make-green")
  .addEventListener("click", function makeGreen() {
    document.body.style.backgroundColor = "green";
  });

document.getElementById("btn-make-gold").addEventListener("click", function () {
  document.body.style.backgroundColor = "goldenrod";
});
