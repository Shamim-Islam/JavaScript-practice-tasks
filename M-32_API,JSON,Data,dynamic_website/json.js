// json load data

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((json) => console.log(json));
};

// json post data

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      //   console.log(json);
      displayPost(json);
    });
};

const displayPost = (posts) => {
  //1. get the container and empty the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  //console.log(postContainer);
  posts.forEach((post) => {
    //2.create an element
    const postCard = document.createElement("div");
    postCard.innerHTML = `
        <div class="postCard">
            <h2>${post.title}</h2>
            <p>
                ${post.body}
            </p>
        </div>
    `;
    // 3. add to the container
    postContainer.append(postCard);
  });
};

loadPost()
