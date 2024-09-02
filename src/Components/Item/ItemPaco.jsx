import Item from './Item'
import usePerfumesDB from '../../hooks/usePerfumesDB';
import { useParams } from 'react-router-dom';


export default function ItemPaco(){
  
    const {products, loading} = usePerfumesDB();

    const perfumesPaco = products.filter((product)=> product.idMarca === "paco");
    
    return(
        <div className="itemListContainer">
        {perfumesPaco.map((unPerfume)=>(
            <Item key={unPerfume.id} item={unPerfume}/>
        ))}

    </div>
    )
}