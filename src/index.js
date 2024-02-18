import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Blog from "./Routes/Blog";
import Home from "./Routes/Home";
import Destinations from "./Routes/Destinations";
import AboutUs from "./Routes/About Us";
import Navbar from "./Components/Navbar";
import "./App.css"

const AppLayout = () => (
    <>
    <Navbar />
    <Outlet />
    </>
);

const router = createBrowserRouter([
    {
    element: <AppLayout/>,
   children:[
    {
        path: "/",
        element: <Home />
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "Destinations",
        element: <Destinations />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },

   ],
    },
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);