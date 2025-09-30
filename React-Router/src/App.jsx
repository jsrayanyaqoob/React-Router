import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Service from "./components/Service";

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
  ])

  return (
    <>  
      <RouterProvider router={router}/>
    </>
  )
}

export default App