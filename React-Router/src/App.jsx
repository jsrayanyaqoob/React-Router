import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Service from "./components/Service";
import User from "./components/User";

function App(){

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/contact",  
      element: <><Navbar/><Contact/></>
    },
    {
      path: "/service",
      element: <><Navbar/><Service/></>
    },
    {
      path: "/user/:username",
      element: <><Navbar/><User/></>
    },
  ])

  return (
    <>  
      <RouterProvider router={router}/>
    </>
  )
}

export default App