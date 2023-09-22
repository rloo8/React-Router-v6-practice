import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Root from "./Root";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import Followers from "./pages/Followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
