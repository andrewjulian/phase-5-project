import React from "react";
import { useLocation } from "react-router-dom";

const Classroom = () => {
  const location = useLocation();
  const data = location.state?.data;

  console.log("location", location);

  console.log("data", data);

  //console.log(state.classroom.id);

  return <div>Classroom</div>;
};

export default Classroom;
