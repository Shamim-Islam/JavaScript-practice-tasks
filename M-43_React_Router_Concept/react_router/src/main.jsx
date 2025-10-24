import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Home from "./components/Home/Home.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import Users from "./components/Users/Users.jsx";
import Users2 from "./components/Users/Users2.jsx";

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptop", Component: Laptops },
      { 
        path: "users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
       },
       {
        path: '/users2',
        element: <Suspense fallback={<span>Loading.....</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
       }
    ],
  },
  {
    path: "about",
    element: <h1>About me here</h1>,
  },
  {
    path: "blogs",
    element: <h1>All my blogs are here</h1>,
  },
  {
    path: "app",
    Component: App,
  },
  {
    path: "app2",
    // element: <App></App>
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
