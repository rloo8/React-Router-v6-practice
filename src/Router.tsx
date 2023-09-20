import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Author from "./pages/Author";
import Book from "./pages/Book";
import Chapters from "./pages/Chapters";
import Characters from "./pages/Characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "author/:authorName",
        element: <Author />,
        children: [
          {
            path: ":bookName",
            element: <Book />,
          },
        ],
      },
    ],
  },
]);

export default router;
