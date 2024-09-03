import Item from './Item'
import usePerfumesDB from '../../hooks/usePerfumesDB';
import FilterByMark from './FilterByMark'

export default function ItemKenzo() {
    const { products, loading} = usePerfumesDB();
    const perfumes = FilterByMark(products, "kenzo")
    
    if(loading) return <h2 className='loading'>Cargando...</h2>

    return (
        
        <div className='itemListContainer'>
            {perfumes.map((product) => (
                <Item key={product.id} item={product} />
            ))}
        </div>
    )
}
