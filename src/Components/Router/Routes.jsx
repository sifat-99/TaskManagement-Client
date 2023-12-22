import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../../App";
import Home from "../Layouts/Home/Home";
import { LoginCard } from "../UserAuthentication/Login/Login";
import { RegistrationCard } from "../UserAuthentication/Registration/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import TaskManagement from "../Layouts/Dashboard/Tasks/TaskManagement/TaskManagement";
import CreateNewTask from "../Layouts/Dashboard/Tasks/CreateNewTask/CreateNewTask";
import TaskManagementDetails from "../Layouts/Dashboard/Tasks/TaskManagement/TaskManagementDetails";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import About from "../Layouts/Home/About/About";
import ContactInfo from "../Layouts/Home/Contact/Contact";
import Profile from "../Profile/Profile";


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
          element: <About></About>,
        },
        {
          path: "/contact",
          element: <ContactInfo></ContactInfo>,
        },
        {
          path:"profile",
          element:<Profile></Profile>
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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: "/dashboard/tasks",
          element: <TaskManagement></TaskManagement>
        },
        {
          path: "/dashboard/tasks/:id",
          element: <TaskManagementDetails />,
      },
        {
          path: '/dashboard/createNewTask',
          element: <CreateNewTask></CreateNewTask>
        }
      ]
    }
  ]);


export default router;