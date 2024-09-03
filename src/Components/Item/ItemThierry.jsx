import Item from './Item'
import usePerfumesDB from '../../hooks/usePerfumesDB';
import FilterByMark from './FilterByMark'

export default function ItemThierry(){
  
    const {products, loading} = usePerfumesDB(); 
    const perfumes = FilterByMark(products, "tm");
    
    return(
        <div className="itemListContainer">
        {perfumes.map((unPerfume)=>(
            <Item key={unPerfume.id} item={unPerfume}/>
        ))}

    </div>
    )
}