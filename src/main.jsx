import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homepage from './page/Homepage.jsx';
import Loginpage from './page/Loginpage.jsx';
import Memberpage from './page/Memberpage.jsx'
import AddDatapage from './page/AddDatapage.jsx';
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />
    },
    {
      path: "home",
      element: <Homepage />
      },
    {
      path : "member",
      element: <Memberpage/>
    },
    {
      path : "addData",
      element: <AddDatapage/>
    }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
