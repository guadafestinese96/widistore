import { useContext } from "react"
import "./Item.css"
import CartContext from "../Cart/CartContext"
import { IsInCartIcon , AddToCartIcon } from "../IconsCart/IconsCart";

export default function Item({ item }) {
   const {cart, addToCart} = useContext(CartContext);

   const checkProductInCart = product =>{
    return cart.some(item=>item === product)
   }

   const isProductInCart = checkProductInCart(item);

    return (
        <div className="itemContainer">
            <div className="itemImgContainer"><img className="itemImg" src={item.img} alt={item.nombre} />
            </div>
            <div className="itemDetails">
                <h3 className="itemMarca">{item.marca}</h3>
                <h3 className="itemModelo">{item.nombre}</h3>
                <h3 className="itemMl">{item.ml}</h3>
                <h3 className="itemPrecio">${item.precio}</h3>
            </div>
            <div className='addToCartButton' 
            onClick={
                ()=>{ isProductInCart ? "Agregado" : addToCart(item)}
                }>{isProductInCart ? <IsInCartIcon/> : <AddToCartIcon item={item}/>}</div>
        </div>
    )
}