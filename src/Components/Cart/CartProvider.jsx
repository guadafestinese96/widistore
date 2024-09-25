import { useState, useEffect } from "react";
import CartContext from "./CartContext";
import Swal from 'sweetalert2'

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);


  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id)

    if (itemInCart) {
      console.log("ya esta en el carrito")

    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Agregado al carrito",
        showConfirmButton: false,
        timer: 1500
      });
      setCart([...cart, { ...product, quantity: 1 }])
    }
  };

  const removeFromCart = (product) => {
    setCart(prevState => prevState.filter(item => item.id != product.id))
  }

 
  const cartTotal = cart.reduce((acc, item) => {
    return acc + (item.precio * item.quantity);
  }, 0)

  const formateador = new Intl.NumberFormat('es-ES');
  const numeroFormateado = formateador.format(cartTotal);
  console.log(numeroFormateado);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  console.log(cart)

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, numeroFormateado }}
    >
      {children}
    </CartContext.Provider>
  );
}