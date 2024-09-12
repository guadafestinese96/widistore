import { useContext } from "react"
import "./Item.css"
import Swal from "sweetalert2"
import CartContext from "../Cart/CartContext"


export default function Item({ item }) {
   const {cart, addToCart} = useContext(CartContext);
  

    return (
        <div className="itemContainer">
            <div className="itemImgContainer"><img className="itemImg" src={item.img} alt={item.nombre} />
            </div>
            <div className="itemDetails">
                <h3 className="itemMarca">{item.marca}</h3>
                <h3 className="itemModelo">{item.nombre}</h3>
                <h3 className="itemMl">{item.ml}</h3>
            </div>
            <button className='addToCartButton' onClick={()=>addToCart(item)}>Agregar al carrito</button>
        </div>
    )
}