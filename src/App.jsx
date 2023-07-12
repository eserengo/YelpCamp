import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Campgrounds from "./pages/Campgrounds"
import "./App.css"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "campgrounds",
      element: <Campgrounds />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;