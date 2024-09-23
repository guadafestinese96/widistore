import { useAuth0 } from "@auth0/auth0-react"
import './User.css'
import Logout from "../Logout/Logout";


export default function User() {
    const { user, isLoading } = useAuth0();

    if (isLoading) return <div className="loadingUser">Loading user...</div>

    return (

        <div className="divUserLogin">
            <div className="imgUserContainer">
                <img className='imgUserDetails' src={user.picture} alt={user.name} />
            </div>

            <div className="userDetails">
                <h2 className="userName">{user.name}</h2>
                <h2 className="userEmail">{user.email}</h2>
            
            <div className="logoutBtnContainer">
                <Logout />
            </div>
            </div>

        </div>
    )

}

