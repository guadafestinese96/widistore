import { NavLink } from "react-router-dom";
import perfumeIcon from '../../../public/perfumeIcon.png'

export default function Example() {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" > 
                <img src={perfumeIcon} className="perfumeIcon" alt="perfumeIcon" />
            </button>
            <ul className="dropdown-menu">
                <li className="liDropdown"><NavLink to='/armani'><a className="dropdown-item" href="#">Armani</a></NavLink></li>

            </ul>
        </div>

    )
}

