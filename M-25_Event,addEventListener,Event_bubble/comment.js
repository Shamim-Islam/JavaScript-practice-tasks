// step-1: set a event handler to the button

document
  .getElementById("btn-post-comment")
  .addEventListener("click", function () {
    // step-2: get the text written in the comment text area
    const commentTextBox = document.getElementById("comment-text-box");
    const newComment = commentTextBox.value;

    // step-3: get the parent node where to publish comment
    const commentContainer = document.getElementById("comment-container");

    // step-4: create a comment p and set the innerText
    const commentElement = document.createElement("p");
    commentElement.classList.add("comment");
    commentElement.innerText = newComment;

    // step-5 : append the new p tag to the parent node
    commentContainer.appendChild(commentElement);

    // step-6: clean the text area
    commentTextBox.value = "";
  });
