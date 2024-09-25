import { useContext } from "react"
import CartContext from "./CartContext"
import { Div } from "./DivStyle";
import './FinalizarCompra.css'
export default function FinalizarCompra() {
    const { cart, numeroFormateado } = useContext(CartContext);

    return (
        <div className="finalizarCompraContainer">
            <div className="detailProductsInCart">
                {cart.map((item) => (
                    <Div>
                        <img src={item.img} alt={item.nombre} className="imgFinalizarCompra" />
                        <h3 className="detailsFc">{item.nombre}</h3>
                        <h3 className="detailsFc">Cantidad: {item.quantity}</h3>
                        <h3 className="detailsFc"> ${item.precio * item.quantity}</h3>
                    </Div>
                ))}
            </div>
            <div className="totalContainer">
                <h3 className="detailsFcTotal">Total: ${numeroFormateado}</h3>
            </div>
        </div>
    )
}