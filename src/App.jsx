import { useState, useRef } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Campgrounds from "./pages/Campgrounds"
import CampgroundDetail from "./pages/CampgroundDetail"
import AddCampground from "./pages/AddCampground"
import AddComment from "./pages/AddComment"
import Login from "./pages/Login"
import "./App.css"

const App = () => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    userName: "",
    password: "",
  });
  const userNameRef = useRef(null);
  const userPasswordRef = useRef(null);

  const eventHandlers = {
    handleUserLogin: (event) => {
      event.preventDefault();
      (userNameRef.current.value == "" || userPasswordRef.current.value == "")
        ? null
        : setAuth({
          isLoggedIn: true,
          userName: userNameRef.current.value,
          password: userPasswordRef.current.value,
        });
    },
    handleUserLogout: () => {
      setAuth({
        isLoggedIn: false,
        userName: "",
        password: "",
      });
    },
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "campgrounds",
      element: <Layout state={auth} eventHandler={eventHandlers.handleUserLogout} />,
      children: [
        {
          index: true,
          element: <Campgrounds />
        },
        {
          path: ":id",
          element: <CampgroundDetail />,
        },
        {
          path: "add_campground",
          element: <AddCampground />,
        },
        {
          path: "add_comment",
          element: <AddComment />,
        },
      ],
    },
    {
      path: "login",
      element: <Login eventHandler={eventHandlers.handleUserLogin} ref={{userNameRef, userPasswordRef}} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;