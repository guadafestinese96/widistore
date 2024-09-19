import { useContext } from "react";
import CartContext from "../Cart/CartContext";
import '../Cart/Cart.css'
import useCount from "../../hooks/useCount";
import './CheckoutForm.css'

export default function ProductsToBuy() {
    const { cart } = useContext(CartContext);
    const {  count, increment, decrement } = useCount();
  
    return (
        <div className="productsToBuy">
            {cart.map((item) => (
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
                        <h3 className="details">$ {item.precio * count}</h3>
                    </div>
                    <footer className="cartFooter">
                        <span className="cantidad">Cantidad: {count}</span>
                        <button className='removeCartButton' onClick={decrement} disabled={count == 0}>-</button>
                        <button className='addCartButton' onClick={increment} disabled={count === item.stock}>+</button>
                    </footer>
                </div>
            ))}
        </div>
    )
}