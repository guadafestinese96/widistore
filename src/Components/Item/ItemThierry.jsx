import Item from './Item'
import usePerfumesDB from '../../hooks/usePerfumesDB';
import FilterByMark from './FilterByMark'

export default function ItemThierry(){
  
    const {products, loading} = usePerfumesDB(); 
    const perfumes = FilterByMark(products, "tm");
    if(loading) return <h2 className='loading'>Cargando...</h2>

    return(
        <div className="itemListContainer">
        {perfumes.map((unPerfume)=>(
            <Item key={unPerfume.id} item={unPerfume}/>
        ))}

    </div>
    )
}