import "./App.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import RootLayout from "./components/pages/RootLayout";
import LinkPage from "./components/pages/Link";
import InsideLink from "./components/pages/InsideLink";
import Blog from "./components/pages/Blog";
import Frontend from "./components/pages/Frontend";
import HTMLtutorial from "./components/pages/HTMLtutorial";
import CSStutorial from "./components/pages/CSStutorial";
import JStutorial from "./components/pages/JStutorial";
import ReactTutorial from "./components/pages/ReactTutorial";
import Backend from "./components/pages/Backend";
import NodeJS from "./components/pages/NodeJS";
import SQL from "./components/pages/SQL";
import MySQL from "./components/pages/MySQL";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>Something went wrong!</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // //////////////////////////////////////////////////////////////////
      {
        path: "/link",
        element: (
          <>
            <h1>Link page goes here...</h1>
            <LinkPage />
          </>
        ),
        // Not here
        // children: [
        //   {
        //     path: "/link/inside-link",
        //     element: <h1>Inside the link page goes here...</h1>,
        //   },
        // ],
      },

      {
        path: "/link/inside-link",
        element: (
          <>
            <h1>Inside the link page goes here...</h1>
            <InsideLink />
          </>
        ),
      },
      {
        path: "/link/inside-link/inner-inside-link",
        element: (
          <>
            <h1>Inner-Inside the link page goes here...</h1>{" "}
            <Link to={"/"}>Go to home page?</Link>
          </>
        ),
      },
      // //////////////////////////////////////////////////////////////////
      {
        path: "/blog",
        element: (
          <>
            <Blog />
          </>
        ),
      },
      {
        path: "/blog/frontend",
        element: (
          <>
            <h1>Font-end Tutorial goes here...</h1>
            <Frontend />
          </>
        ),
      },
      {
        path: "/blog/frontend/html",
        element: (
          <>
            <HTMLtutorial />
            <Link to={"/"}>Go to home page?</Link>
          </>
        ),
      },
      {
        path: "/blog/frontend/css",
        element: (
          <>
            <CSStutorial />
            <Link to={"/"}>Go to home page?</Link>
          </>
        ),
      },
      {
        path: "/blog/frontend/javascript",
        element: (
          <>
            <JStutorial />
            <Link to={"/"}>Go to home page?</Link>
          </>
        ),
      },
      {
        path: "/blog/frontend/reactjs",
        element: (
          <>
            <ReactTutorial />
            <Link to={"/"}>Go to home page?</Link>
          </>
        ),
      },

      {
        path: "/blog/backend",
        element: (
          <>
            <h1>Back-end Tutorial goes here...</h1>
            <Backend />
          </>
        ),
      },
      {
        path: "/blog/backend/nodejs",
        element: (
          <>
            <NodeJS />
            <Link to={"/"}>Go to home page?</Link>
          </>
        ),
      },
      {
        path: "/blog/backend/sql",
        element: (
          <>
            <SQL />
            <Link to={"/"}>Go to home page?</Link>
          </>
        ),
      },
      {
        path: "/blog/backend/mysql",
        element: (
          <>
            <MySQL />
            <Link to={"/"}>Go to home page?</Link>
          </>
        ),
      },
      // //////////////////////////////////////////////////////////////////

      {
        path: "/code",
        element: <h1>Code page goes here...</h1>,
      },
      {
        path: "/about",
        element: <h1>About us page goes here...</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
