import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "./../Pages/Auth/Login";
import SignUp from "./../Pages/Auth/Signup";
import Register from "../Pages/Auth/Register";
import Blogs from "../Pages/Blogs/Blogs";
import PrivateRoutes from "./PrivateRoutes";
import Villas from "../Components/Villas/Villas";
import Villa from "../Components/Villas/Villa";
import Users from "../Components/Users/Users";
import UpdateUser from "../Components/Users/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Error Page not Found</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/villas",
        element: <Villas />,
        loader: () => fetch("http://localhost:3000/villas"),
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:3000/users"),
      },
      {
        path: "/update/:id",
        element: <UpdateUser />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params.id}`),
      },
      {
        path: "/villa/:id",
        element: <Villa />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/villas/${params.id}`),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoutes>
            <Blogs />,
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
