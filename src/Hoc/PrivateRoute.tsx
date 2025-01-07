import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Hooks/auth";
import { appRoutes } from "../Types/routes";

type Props = {
  children: React.ReactNode;
}
const PrivateRoute = ({ children}: Props) => {
  
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.user.user) {
    return <Navigate to={appRoutes.login} state={{from: location.pathname}} replace />
  }
  
  return (  
    children
  );
}
 
export default PrivateRoute;