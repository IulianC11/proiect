import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Blog from "./Routes/Blog";
import Home from "./Routes/Home";
import Products from "./Routes/Products";
import AboutUs from "./Routes/AboutUs";
import Navbar from "./Components/Navbar";
import "./App.css";
import Dubai from "./Page/Dubai";
import AbuDhabi from "./Page/AbuDhabi";
import Footer from "./Components/Footer";

import Cart from "./Components/Cart";





const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "products",
        element: <Products/>,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "/blog/Dubai",
        element: <Dubai />,
      },
      {
        path: "/blog/AbuDhabi",
        element: <AbuDhabi />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
