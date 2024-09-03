import Item from './Item'
import usePerfumesDB from '../../hooks/usePerfumesDB';
import FilterByMark from './FilterByMark'

export default function ItemPaco(){
  
    const {products, loading} = usePerfumesDB(); 
    const perfumes = FilterByMark(products, "paco");
    
    return(
        <div className="itemListContainer">
        {perfumes.map((unPerfume)=>(
            <Item key={unPerfume.id} item={unPerfume}/>
        ))}

    </div>
    )
}