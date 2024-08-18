import perfumesArmani from './ItemArmani';
import Item from './Item';
import { useState } from 'react';


export default function ItemArmani(){
    const [armani, setArmani] = useState(perfumesArmani);

    return(
        <div className="itemListContainer">
        {armani.map((unArmani)=>(
            <Item key={unArmani.id} item={unArmani}/>
        ))}

    </div>
    )
}