import Item from './Item'
import usePerfumesDB from '../../hooks/usePerfumesDB';
import { useParams } from 'react-router-dom';

export default function ItemArmani() {
    const { products, loading} = usePerfumesDB();
     
    const productsArmani = products.filter((product)=> product.idMarca === "armani");
    console.log(productsArmani);
    
    return (
        <div className='itemListContainer'>
            {productsArmani.map((product) => (
                <Item key={product.id} item={product} />
            ))}
        </div>
    )
}
