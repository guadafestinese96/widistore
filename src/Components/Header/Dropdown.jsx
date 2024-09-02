import { NavLink } from "react-router-dom";
import perfumeIcon from '../../../public/perfumeIcon.png'

export default function Example() {
    return (
        <div className="dropdown">
            
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" > 
                <h2 className="titlePerfumes">Perfumes</h2>
                <img src={perfumeIcon} className="perfumeIcon" alt="perfumeIcon" />
            </button>
            <ul className="dropdown-menu">
                <li className="liDropdown"><NavLink to='/armani'><a className="dropdown-item" href="#">Armani</a></NavLink></li>
                <li className="liDropdown"><NavLink to='/pacorabanne'><a className="dropdown-item" href="#">Paco Rabanne</a></NavLink></li>
            </ul>
        </div>

    )
}

