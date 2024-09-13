import carritoCheck from '../../../public/carritoCheck2.png'
import './IconsCart.css'

export function AddToCartIcon(){
    return(
        <div className='buttonsCart'>
        <button className='addToCartButton1'>Agregar al carrito</button></div>
        
    )
}

export function IsInCartIcon(){
    return(
        <div className='buttonsCart'>
        <img src={carritoCheck} alt="carritoCheck" className='carritoCheck'/></div>
    )
}