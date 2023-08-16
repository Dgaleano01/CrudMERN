import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export const ProtectedRouthe = () => {
  const {user, isAuthenticathed} = useAuth()
  console.log(user, isAuthenticathed);
  if ( !isAuthenticathed)return <Navigate to={"/login"} replace/>
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}
export default ProtectedRouthe;