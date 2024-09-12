import {  useContext, useId } from 'react'
import cartImg from '../../../public/cart.png'
import './Cart.css'
import CartContext from './CartContext';
import CartItem from './CartItem'

export default function Cart() {
    const cartCheckboxId = useId();
    const {cart} = useContext(CartContext);
    const quantityProductsCart = cart.length;
    
    return (
        <div className='cartImgLogo'>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <span>{quantityProductsCart}</span>
                <img src={cartImg} alt="cart" className='cartImg' />
                
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className='cart'>
            <ul>
                 {cart.map((productoCarrito)=>(
                    <li key={productoCarrito.id}>
                    <CartItem item={productoCarrito}/>
                    </li>
                 ))}
                </ul>
            </aside>
        </div>
    )
}
