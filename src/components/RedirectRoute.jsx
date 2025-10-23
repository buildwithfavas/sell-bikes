import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RedirectRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  if (user) {
    return <Navigate to={"/home"} replace />;
  }
  return children;
}
