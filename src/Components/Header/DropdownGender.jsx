
import { NavLink } from 'react-router-dom'
import './Dropdown.css'

export default function DropdownGender() {

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle genderButton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Genero
            </button>
            <ul className="dropdown-menu">
                <NavLink to='/femenino' className="dropdown-item">
                <li className="genderLi">Femenino</li>
                </NavLink>
                <NavLink to='/masculino' className="dropdown-item">
                <li className='genderLi'>Masculino</li>
                </NavLink>

            </ul>
        </div>
    )
}
