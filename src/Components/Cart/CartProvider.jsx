import {  useState } from "react";
import CartContext from "./CartContext";
import Swal from 'sweetalert2'

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemInCart = cart.find((item)=> item === product)
    if(itemInCart){
      console.log("ya esta en el carrito")
    }else{

      setCart([...cart, product])
    }
        
  };


  console.log(cart)

  return (
    <CartContext.Provider
      value={{cart, addToCart}}
    >
      {children}
    </CartContext.Provider>
  );
}