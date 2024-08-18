import logoWidi from '../../../public/widiLogoRedondo.png'
import './Header.css'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'

export default function Header() {
    return (
        <div className='headerContainer'>
            <NavLink to='/' className={({ isActive }) => isActive ? "activeLogoHeader" : "logoHeaderContainer"}>
                <img src={logoWidi} alt="logoWidi" className='logoHeader' />
            </NavLink>
            <Dropdown/>
        </div>
    )
}