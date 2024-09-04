import Item from './Item'
import usePerfumesDB from '../../hooks/usePerfumesDB';
import FilterByMark from './FilterByMark'
import ItemList from './ItemList';

export default function ItemCreed(){
  
    const {products, loading} = usePerfumesDB(); 
    const perfumes = FilterByMark(products, "creed");
    if(loading) return <h2 className='loading'>Cargando...</h2>

    return (
        <ItemList products={perfumes} />
    )
}