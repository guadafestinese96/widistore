import { useAuth0 } from "@auth0/auth0-react";
import User from "../User/User";
import Login from '../Login/Login'
import Logout from '../Logout/Logout'

export default function LoginHeader(){
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>

    return(
        isAuthenticated? <User/> : <Login/>
    )
    
}