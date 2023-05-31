import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import SecureRoute from "./SecureRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/Additem";
import AdminRoutes from "./adminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <SecureRoute>
            <Secret />
          </SecureRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <SecureRoute>
        <Dashboard />
      </SecureRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "addItem",
        element: (
          <AdminRoutes>
            <AddItem />
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
