import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'registration',
            element: <Registration></Registration>
        },
        {
          path: 'instructor',
          element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        },
      ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'myclasses',
            element: <MyClasses></MyClasses>
          },
          {
            path: 'enrolledclasses',
            element: <EnrolledClasses></EnrolledClasses>
          }
        ]
    }
  ]);