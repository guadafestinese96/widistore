import { useId } from 'react'
import cart from '../../../public/cart.png'
import pureXs from '../../../public/pureXsM.png';
import './Cart.css'
export default function Cart(){
    const cartCheckboxId = useId();

    return(
        <div>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <img src={cart} alt="cart" className='cartImg'/>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className='cart'>
                <ul>
                    <li>
                        <img src={pureXs} alt="purexs" className='productsCartImg'/>
                        <div>
                            <strong>Pure xs</strong> - $32000
                        </div>

                        <small>
                            Qty: 1
                        </small>
                        <button className='addCartButton'>+</button>
                    
                    </li>
                </ul>

            </aside>
        </div>
    )
}