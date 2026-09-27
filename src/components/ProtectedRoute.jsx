import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const loggedInUser = useSelector((store) => store?.user?.loggedin);
  if (!loggedInUser) return <Navigate to='/' replace />;
  return children;
};

export default ProtectedRoute;
