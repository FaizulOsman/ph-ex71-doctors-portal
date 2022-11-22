import "./App.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { useContext, useState } from "react";
import { AuthContext } from "./contexts/AuthProvider";

function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div data-theme={theme ? "night" : "light"}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
