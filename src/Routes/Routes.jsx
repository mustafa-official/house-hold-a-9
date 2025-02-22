import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ViewDetails from "../pages/Home/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import BookNow from "../pages/BookNow/BookNow";
import UserProfile from "../pages/UserProfile/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/view-details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/book-now",
        element: <PrivateRoute><BookNow></BookNow></PrivateRoute>
      },
      {
        path: "/my-profile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      }
    ],
  },
]);

export default router;
