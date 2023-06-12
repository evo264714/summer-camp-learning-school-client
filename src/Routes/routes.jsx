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
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyAddedClass from "../pages/Dashboard/MyAddedClass/MyAddedClass";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";

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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: 'myclasses',
            element: <MyClasses></MyClasses>
          },
          {
            path: 'enrolledclasses',
            element: <EnrolledClasses></EnrolledClasses>
          },
          {
            path: 'manageusers',
            element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          },
          {
            path: 'addclass',
            element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
          },
          {
            path: 'myaddedclass',
            element: <InstructorRoute><MyAddedClass></MyAddedClass></InstructorRoute>
          },
          {
            path: 'manageclasses',
            element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          }
        ]
    }
  ]);