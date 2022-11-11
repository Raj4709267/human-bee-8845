import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivetRoute({ children }) {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  console.log(isAuth);
  if (!isAuth) {
    return <Navigate to="/profile" />;
  }
  return children;
}

export default PrivetRoute;
