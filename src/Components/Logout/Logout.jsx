import { useAuth0 } from "@auth0/auth0-react"
import './Logout.css'

export default function Logout() {
    const { logout } = useAuth0();

    return (
        <button className="logoutBtn" onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
        </button>
    )
}
