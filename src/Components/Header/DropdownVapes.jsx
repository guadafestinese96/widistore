
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
                    <li className="liDropdown"><a className="dropdown-item" href="#">Elfbar</a></li>

                </ul>
            </div>
        </div>

    )
}
