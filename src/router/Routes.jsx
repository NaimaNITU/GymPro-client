import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import AddSchedule from "../page/AddSchedule";
import AllSchedule from "../page/AllSchedule";
import SignUp from "./../page/SignUp";
import SignIn from "./../page/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/addSchedule",
        Component: AddSchedule,
      },
      {
        path: "/allSchedule",
        Component: AllSchedule,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
    ],
  },
]);
