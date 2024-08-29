import perfumesArmani from './ItemArmaniJs'
import Item from './Item'
import usePerfumes
 from '../../hooks/usePerfumes';
import usePerfumesDB from '../../hooks/usePerfumesDB';
import ItemList from './ItemList';

/*
export default function ItemArmani(){
    usePerfumes(perfumesArmani);
    const {perfumes, loading} = usePerfumesDB();

    if (loading) return <h1>Cargando...</h1>

    return(
        <div className="itemListContainer">
        <ItemList perfumes={perfumes}/>
    </div>
    )
}

*/
export default function ItemArmani(){
    usePerfumes(perfumesArmani);
    
    return(
        <div className="itemListContainer">
        {perfumesArmani.map((unArmani)=>(
            <Item key={unArmani.id} item={unArmani}/>
        ))}

    </div>
    )
}
    