import { NavLink } from "react-router-dom";
import perfumeIcon from '../../../public/perfumeIcon.png'
import './Dropdown.css'

const rutas = [
    {
        path: "/armani",
        label: "Armani",
    },
    {
        path: "/pacorabanne",
        label: "Paco Rabanne",
    },
    {
        path: "/calvinklein",
        label: "Calvin Klein",
    },
    {
        path: "/carolinaherrera",
        label: "Carolina Herrera",
    },
    {
        path: "/thierrymugler",
        label: "Thierry Mugler",
    },
    {
        path: "/creed",
        label: "Creed",
    },
    {
        path: "/dior",
        label: "Dior",
    },
    {
        path: "/kenzo",
        label: "Kenzo",
    },
    {
        path: "/jesusdelpozo",
        label: "Jesus Del Pozo",
    },
    {
        path: "/givenchy",
        label: "Givenchy",
    },
    {
        path: "/lancome",
        label: "Lancome",
    },
    {
        path: "/miyake",
        label: "Miyake",
    },
    {
        path: "/tomford",
        label: "Tom Ford",
    },
    {
        path: "/bvlgary",
        label: "Bvlgary",
    },
    {
        path: "/jeanpaulgaultier",
        label: "Jean Paul Gaultier",
    },
    {
        path: "/yvessaintlauren",
        label: "Yves Saint Lauren",
    }
]
export default function DropdownPerfus() {
    return (
        <div className="dropdown">
            <div className="perfus">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    <h2 className="titlePerfumes">Perfumes</h2>
                    <img src={perfumeIcon} className="perfumeIcon" alt="perfumeIcon" />
                </button>
                <ul className="dropdown-menu">
                    {rutas.map((ruta, index) => (
                        <li key={index} className="liDropdown">
                            <NavLink to={ruta.path}>
                                <a className="dropdown-item" href="#">{ruta.label}</a>
                            </NavLink>
                        </li>
                    ))}

                </ul>
            </div>


        </div>

    )
}

