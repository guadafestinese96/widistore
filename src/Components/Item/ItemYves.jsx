import usePerfumesDB from '../../hooks/usePerfumesDB';
import FilterByMark from '../FilterProducts/FilterByMark'
import ItemList from './ItemList';


export default function ItemYves() {

    const { products, loading } = usePerfumesDB();
    const perfumes = FilterByMark(products, "yves");

    if (loading) return <h2 className='loading'>Cargando...</h2>

    return (
        <ItemList products={perfumes} />
    )
}

