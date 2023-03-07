import { useLogin } from "../context/LoginContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { validateUser} = useLogin();

  if(!validateUser()){
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedRoute;
