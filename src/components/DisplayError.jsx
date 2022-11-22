import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .then((e) => console.log(e));
  };

  return (
    <div>
      <p className="text-red-500">Something went wrong</p>
      <p className="text-red-400">
        <i>{error.statusText || error.message}</i>
      </p>
      <h4>
        Please <button onClick={handleSignOut}>Sign Out</button> and log back in
      </h4>
    </div>
  );
};

export default DisplayError;
