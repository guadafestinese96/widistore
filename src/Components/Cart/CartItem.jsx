import useCount from "../../hooks/useCount"
import deleteCart from "../../../public/deleteCart.png"
import { useContext} from "react";
import CartContext from "./CartContext";

export default function CartItem({ item }) {
    const { count, increment, decrement } = useCount();
    const {removeFromCart} = useContext(CartContext)

   
    return (
        <div className="cartItemContainer">
            <div className="cartItemShow">
                <div className="imgCartContainer">
                <img className="productsCartImg vapeImgCart"
                    src={item.img}
                    alt={item.nombre}
                />
                </div>
                
                <div className="cartItemDetails">
                    <h3 className="details nombreDetails">{item.nombre}</h3>
                    <h3 className="details">{item.genero}</h3>
                    <h3 className="details">$ {item.precio *count}</h3>
                </div>
            </div>

            <footer className="cartFooter">
                <span className="cantidad">Cantidad: {count}</span>
                <button className={count === 1 ? 'disabledButton' :'removeCartButton'} onClick={decrement} disabled={count == 1}>-</button>
                <button className={item.stock === count? 'disabledButton' : 'addCartButton'} onClick={increment}
                disabled={count === item.stock}>+</button>
                <img src={deleteCart} alt="deleteCart" className="deleteFromCartImg" onClick={()=>removeFromCart(item)}/>
            </footer>

        </div>
    )
}
