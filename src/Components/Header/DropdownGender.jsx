
import { NavLink } from 'react-router-dom'
import './Dropdown.css'

export default function DropdownGender() {

    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle genderButton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Genero
            </button>
            <ul class="dropdown-menu">
                <NavLink to='/femenino'>
                <li><a class="dropdown-item genderLi" href="#">Femenino</a></li>
                </NavLink>
                <NavLink to='/masculino'>
                <li><a class="dropdown-item genderLi" href="#">Masculino</a></li>
                </NavLink>

            </ul>
        </div>
    )
}
