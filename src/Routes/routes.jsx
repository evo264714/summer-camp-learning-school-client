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
import AdminRoute from "./AdminRoute";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Payment from "../pages/Dashboard/Payment/Payment";
import NotFound from "../pages/NotFound/NotFound"

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFound></NotFound>,
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
        errorElement: <NotFound></NotFound>,
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
            element: <AddClass></AddClass>
          },
          {
            path: 'myaddedclass',
            element: <MyAddedClass></MyAddedClass>
          },
          {
            path: 'manageclasses',
            element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          },
          {
            path: 'paymenthistory',
            element: <PaymentHistory></PaymentHistory>
          },
          {
            path: '/dashboard/payment/:classId',
            element: <Payment></Payment>
          }
        ]
    }
  ]);