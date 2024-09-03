import logoWidi from '../../../public/widiLogoRedondo.png'
import './Header.css'
import { NavLink } from 'react-router-dom'
import DropdownPerfus from './DropdownPerfus'
import DropdownVapes from './DropdownVapes'

export default function Header() {
    return (
        <div className='headerContainer'>
            <NavLink to='/' className={({ isActive }) => isActive ? "activeLogoHeader" : "logoHeaderContainer"}>
                <img src={logoWidi} alt="logoWidi" className='logoHeader' />
            </NavLink>
            <div className='dropdowns'>
            <DropdownPerfus/>
            <DropdownVapes/>
            </div>
            
        </div>
    )
}