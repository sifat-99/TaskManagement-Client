import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../../App";
import Home from "../Layouts/Home/Home";
import { LoginCard } from "../UserAuthentication/Login/Login";
import { RegistrationCard } from "../UserAuthentication/Registration/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Tasks from "../Layouts/Dashboard/Tasks/Tasks";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <div>About</div>,
        },
        {
          path: "/contact",
          element: <div>Contact</div>,
        },
        {
            path: "/login",
            element: <LoginCard></LoginCard>,
        },
        {
            path: "/register",
            element: <RegistrationCard></RegistrationCard>,
        },
      ]
    },
    {
      path:"/dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: "home",
          element: <Home></Home>
        },
        {
          path: "task",
          element: <Tasks></Tasks>
        }
      ]
    }
  ]);


export default router;