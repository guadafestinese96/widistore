import Item from "./Item";
import "./Item.css"

export default function ItemList({perfumes}){
    return(
        <div>
            {perfumes.map((perfume)=>{
                <Item key={perfume.id} item={perfume}/>
            })}
        </div>
    )
}