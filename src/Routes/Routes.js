import { createBrowserRouter } from "react-router-dom";
import Appointment from "../components/Appointment";
import Home from "../components/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/appointment", element: <Appointment></Appointment> },
    ],
  },
]);
