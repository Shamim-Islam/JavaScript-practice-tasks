import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";
import Players from "./Players";
import "./App.css";
import { Suspense } from "react";

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(
//   res => res.json())

// const fetchFriends = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json();
// }

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  // const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  const fetchUrl = "https://fake-json-api.mock.beeceptor.com/users";

  const userPromise = fetch(fetchUrl).then((res) => {
    return res.json();
  });
  console.log(userPromise);

  // function handleClick() {
  //   alert("I am Clicked");
  // }

  // const handleClick3 = () => {
  //   alert("clicked 3");
  // };

  // const handleAdd5 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum);
  // };

  // function useState(initialValue) {
  //   let state = initialValue;
  //   function setState(newValue) {
  //     state = newValue;
  //   }
  //   return [state, setState]
  // }

  return (
    <>
      <h1 className="font-bold text-red-500">Vite + React</h1>
      hello
      <Players></Players>
      {/* <Suspense fallback={<h3>Posts are coming...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Data is loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
      <Batsman></Batsman>
      <Counter></Counter>
      <br />
      {/* <button onClick={handleClick}>Click Me</button> */}
      <br />
      <button
        onClick={function handleClick2() {
          alert("I am Clicked 2");
        }}
      >
        Click Me 2
      </button>
      <br />
      {/* <button onClick={handleClick3}>Click me 3</button> */}
      <br />
      <button onClick={() => alert("Clicked 4")}>Click me 4</button>
      <br />
      {/* <button onClick={() => handleAdd5(5)}>Click Add 5</button> */}
    </>
  );
}

export default App;
