import React from "react";
import { useLocation } from "react-router-dom";

const Classroom = () => {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};

export default Classroom;
