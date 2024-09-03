import Item from './Item'
import usePerfumesDB from '../../hooks/usePerfumesDB';
import FilterByMark from './FilterByMark'

export default function ItemVapes() {
    const { products, loading} = usePerfumesDB();
    const perfumes = FilterByMark(products, "vape")
    
    if(loading) return <h2 className='loading'>Cargando...</h2>

    return (
        
        <div className='itemListContainer'>
            {perfumes.map((product) => (
                <Item key={product.id} item={product} />
            ))}
        </div>
    )
}
