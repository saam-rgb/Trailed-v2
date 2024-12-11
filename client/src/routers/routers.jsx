import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/Home";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Cart } from "../pages/bags/Cart";
import { Checkout } from "../pages/bags/Checkout";
import { SingleBag } from "../pages/bags/SingleBag";
import PrivateRoutes from "./PrivateRoutes";
import Orders from "../pages/bags/Orders";
import AdminRoutes from "./AdminRoutes";
import AdminLogin from "../components/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
      },
      {
        path: "/bags/:id",
        element: <SingleBag />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoutes>
        <div>Dashboard</div>
      </AdminRoutes>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoutes>
            <div>Dashboard Home</div>
          </AdminRoutes>
        ),
      },
      {
        path: "add-bag",
        element: (
          <AdminRoutes>
            <div>Add bags</div>
          </AdminRoutes>
        ),
      },
      {
        path: "edit-bag/:id",
        element: (
          <AdminRoutes>
            <div>Edit ag</div>
          </AdminRoutes>
        ),
      },
      {
        path: "manage-bags",
        element: (
          <AdminRoutes>
            <div>Manage bags</div>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
