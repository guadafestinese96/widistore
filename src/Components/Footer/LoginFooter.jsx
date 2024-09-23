import { useAuth0 } from "@auth0/auth0-react";
import User from "../User/User";
import Login from '../Login/Login'
import './Footer.css'

export default function LoginFooter(){
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div className="loadingFooter">Loading User...</div>

    return(
        isAuthenticated? <User/> : <Login/>
    )
    
}