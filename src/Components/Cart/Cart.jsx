import { useContext, useId } from 'react'
import cartImg from '../../../public/cart.png'
import './Cart.css'
import CartContext from './CartContext';
import CartItem from './CartItem'
import { NavLink } from 'react-router-dom';
// import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
// import axios from "axios";



export default function Cart() {
    // initMercadoPago('YOUR_PUBLIC_KEY', {
    //     locale: "es-AR",
    // });
    const cartCheckboxId = useId();
    const { cart } = useContext(CartContext);
    const quantityProductsCart = cart.length;

 

    return (
        <div className='cartImgLogo'>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <span className='numberCartSpan'>{quantityProductsCart}</span>
                <img src={cartImg} alt="cart" className='cartImg' />

            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className='cart'>
                <ul key="key" className='ulCart'>
                    {cart.map((productoCarrito) => (
                        <li key={productoCarrito.id} className='liCart'>
                            <CartItem item={productoCarrito} />
                        </li>
                    ))}
                </ul>
                <footer className={cart.length>0 ? 'finalizarCompraFooter' : 'finalizarCompraNone'}>
                    
                    <NavLink to='/finalizarcompra'>
                    <button className='finalizarCompraBtn'> Finalizar Compra </button>
                    </NavLink>
                    {/* <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} /> */}

                </footer>
            </aside>

        </div>
    )
}

