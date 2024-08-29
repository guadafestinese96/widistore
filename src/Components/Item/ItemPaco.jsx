import perfumesPaco from './ItemPacoJs'
import Item from './Item'
import usePerfumes from '../../hooks/usePerfumes';


export default function ItemPaco(){
    usePerfumes(perfumesPaco);

    return(
        <div className="itemListContainer">
        {perfumesPaco.map((unPerfume)=>(
            <Item key={unPerfume.id} item={unPerfume}/>
        ))}

    </div>
    )
}