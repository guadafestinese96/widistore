import { useContext, useState } from "react";
import CartContext from "../Components/Cart/CartContext";

export default function useCount(item){
    const initialValue = 1;
    const [count, setCount] = useState(initialValue);
    const {cart} = useContext(CartContext)

    const increment = ()=>{
        setCount(count +1);
        item.quantity++;
        console.log(item.quantity)
        console.log(cart)
    };

    const decrement = ()=>{
        setCount(count -1);
        item.quantity--;
        console.log(item.quantity)
        console.log(cart)
    }
    const reset = ()=>{
        setCount(initialValue);
    }
    return {count, increment, decrement, reset}
}