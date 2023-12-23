import { createBrowserRouter } from "react-router-dom";

import Login from "componets/auth/Login";
import Register from "componets/auth/Register";
import Home from "page/users/Home";
// import Layout from "components/layout";
// import Dashboard from "components/dashboard";
// import Comments from "components/comments";
// import Profile from "components/profile";
// import Users from "components/users";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

// export const PROTECTED = "/protected";
// export const DASHBOARD = "/protected/dashboard";
// export const USERS = "/protected/users";
// export const PROFILE = "/protected/profile/:id";
// export const COMMENTS = "/protected/comments/:id";

export const router = createBrowserRouter([
  { path: ROOT, element: <Home /> },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  // {
  //   path: PROTECTED,
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: DASHBOARD,
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: USERS,
  //       element: <Users />,
  //     },
  //     {
  //       path: PROFILE,
  //       element: <Profile />,
  //     },
  //     {
  //       path: COMMENTS,
  //       element: <Comments />,
  //     },
  //   ],
  // },
]);
