
import { NavLink } from 'react-router-dom'
import vapeIcon from '../../../public/vape.png'
import './Dropdown.css'

export default function DropdownVapes() {
    return (
        <div className="dropdown">

            <div className="vapes">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    <h2 className="titlePerfumes">vapes</h2>
                    <img src={vapeIcon} className="perfumeIcon" alt="vapeIcon" />
                </button>
                <ul className="dropdown-menu">
                    <NavLink to='productosvapes'>
                        <li className='liDropdown'>
                        <li className="liDropdown"><a className="dropdown-item" href="#">Ver Todos</a></li>
                        </li>
                    </NavLink>
                    <NavLink to='/elfbar'>
                        <li className="liDropdown"><a className="dropdown-item" href="#">Elfbar</a></li>
                    </NavLink>
                </ul>
            </div>
        </div>

    )
}
