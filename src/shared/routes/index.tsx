import { useAuthProvider } from "../context/auth_context";
import { AuthRoutes } from "./auth_routes";
import { UserRoutes } from "./user_routes";





export function Router(){
  const { useData } = useAuthProvider()
  const userId = 'askdfkjçaq-qwe-rqwer';
  return userId ? <UserRoutes/> : <AuthRoutes/>;
}