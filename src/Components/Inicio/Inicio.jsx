
import { NavLink } from 'react-router-dom'
import './Inicio.css'

export default function Inicio() {
    return (
        <div className="titleIndex">
            <h1>WIDISTOREOK</h1>
            <NavLink to='/productos'><h2 className="verProductos">Ver todos los productos</h2></NavLink>
            
        </div>
    )
}