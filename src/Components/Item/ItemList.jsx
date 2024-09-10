import Item from "./Item";
import "./Item.css"

export default function ItemList({products}){
    
    return(
        
        <div className="itemListContainer">
           
            {products.map((product, index)=>(
                <Item key={index} item={product}/>
            ))}
           
        </div>
    )
}