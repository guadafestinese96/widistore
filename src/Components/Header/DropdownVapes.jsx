
import { NavLink } from 'react-router-dom'
import vapeIcon from '../../../public/vape.png'
import './Dropdown.css'

const rutas_vapes=[
    {
        path: "/productosvapes",
        label:"Ver Todos" ,
    },
    {
        path:"/elfbar",
        label:"Elfbar" ,
    }
]

export default function DropdownVapes() {
    return (
        <div className="dropdown">

            <div className="vapes">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    <h2 className="titlePerfumes">vapes</h2>
                    <img src={vapeIcon} className="perfumeIcon" alt="vapeIcon" />
                </button>
                
                <ul className="dropdown-menu">
                    {rutas_vapes.map((ruta, index) => (
                        <li key={index} className="liDropdown">
                            <NavLink to={ruta.path} className="dropdown-item">
                            {ruta.label}
                            </NavLink>
                        </li>
                    ))}

                
                </ul>
            </div>
        </div>

    )
}
