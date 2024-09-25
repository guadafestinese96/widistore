import { useState } from "react";

export default function useCount(item){
    const initialValue = 1;
    const [count, setCount] = useState(initialValue);

    const increment = ()=>{
        setCount(count +1);
        item.quantity++;
        console.log(item.quantity)
    };

    const decrement = ()=>{
        setCount(count -1);
        item.quantity--;
        console.log(item.quantity)
    }
    const reset = ()=>{
        setCount(initialValue);
    }
    return {count, increment, decrement, reset}
}