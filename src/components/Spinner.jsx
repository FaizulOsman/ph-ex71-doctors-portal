import React from "react";
import { PulseLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="w-10 mx-auto mt-20">
      <PulseLoader color="#36d7b7" />
    </div>
  );
};

export default Spinner;
