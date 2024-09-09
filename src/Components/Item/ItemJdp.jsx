import Item from './Item'
import usePerfumesDB from '../../hooks/usePerfumesDB';
import FilterByMark from '../FilterProducts/FilterByMark'
import ItemList from './ItemList';

export default function ItemJdp(){
  
    const {products, loading} = usePerfumesDB(); 
    const perfumes = FilterByMark(products, "jdp");
    if(loading) return <h2 className='loading'>Cargando...</h2>

    return (
        <ItemList products={perfumes} />
    )
}