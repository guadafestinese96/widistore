import perfumesPaco from './ItemPacoJs'
import Item from './Item'
import { useState } from 'react';


export default function ItemPaco(){
    const [perfume, setPerfume] = useState(perfumesPaco);
 
    return(
        <div className="itemListContainer">
        {perfume.map((unPerfume)=>(
            <Item key={unPerfume.id} item={unPerfume}/>
        ))}

    </div>
    )
}