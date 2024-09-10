import { useId } from 'react'
import cart from '../../../public/cart.png'
import './Cart.css'
import usePerfumesDB from '../../hooks/usePerfumesDB';
import filterByMark from '../FilterProducts/FilterByMark';
import CartItem from './CartItem';



export default function Cart() {
    const cartCheckboxId = useId();
    const {products} = usePerfumesDB();
    const productosArmani = filterByMark(products, "armani")

    return (
        <div className='cartImgLogo'>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <img src={cart} alt="cart" className='cartImg' />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className='cart'>
            <ul>
                 {productosArmani.map((uno)=>(
                    <li key={uno.id}>
                        <CartItem item={uno}/>
                    </li>
                 ))}
                </ul>
            </aside>
        </div>
    )
}
