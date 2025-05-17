import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../store/authContext";

const ProtectedRoute = () => {
  const { token } = useAuth();
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
