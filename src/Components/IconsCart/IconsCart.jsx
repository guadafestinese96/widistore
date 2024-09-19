import { useContext } from 'react';
import carritoCheck from '../../../public/carritoCheck2.png'
import './IconsCart.css'
import CartContext from '../Cart/CartContext';

export function AddToCartIcon({ item }) {
    const text = ["Agregar al carrito", "Sin Stock"];
    const { addToCart } = useContext(CartContext);
    

    return (
        <div className='buttonsCart'>
            <button className='addToCartButton1' disabled={item.stock === 0} onClick={()=>addToCart(item)}>{item.stock === 0 ? text[1] : text[0]}</button>
        </div>

    )
}

export function IsInCartIcon() {
    return (
        <div className='buttonsCart'>
            <img src={carritoCheck} alt="carritoCheck" className='carritoCheck' /></div>
    )
}