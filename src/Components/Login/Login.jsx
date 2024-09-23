import { useAuth0 } from "@auth0/auth0-react"
import userImg from '../../../public/userImg.png'
import './Login.css'

export default function Login() {
    const { loginWithRedirect } = useAuth0();

    return (
        <button className="loginBtn" onClick={() => loginWithRedirect()}>
            <img src={userImg} alt='userImg' className="userImgLogin" /><h2 className="textBtnLogin">Login</h2>
        </button>
    )
}