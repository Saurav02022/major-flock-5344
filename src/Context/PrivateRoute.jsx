import { useContext } from "react";
import { signup } from "./Signup";
import { Link, Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { state } = useContext(signup);

  if (!state.isAuth) {
    window.location.assign((URL = "http://localhost:3000/signup"));
  }
  return children;
}
export default PrivateRoute;
