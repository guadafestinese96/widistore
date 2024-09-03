import Item from './Item'
import usePerfumesDB from '../../hooks/usePerfumesDB';
import FilterByMark from './FilterByMark'

export default function ItemCreed(){
  
    const {products, loading} = usePerfumesDB(); 
    const perfumes = FilterByMark(products, "creed");
    if(loading) return <h2 className='loading'>Cargando...</h2>

    return(
        <div className="itemListContainer">
        {perfumes.map((unPerfume)=>(
            <Item key={unPerfume.id} item={unPerfume}/>
        ))}

    </div>
    )
}