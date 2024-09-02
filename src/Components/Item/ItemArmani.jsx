import Item from './Item'
import usePerfumesDB from '../../hooks/usePerfumesDB';

export default function ItemArmani(){
   const {products, loading} = usePerfumesDB();

   return(
    <div className='itemListContainer'>
    {products.map((product)=>(
        <Item key= {product.id} item={product}/>
    ))}
    </div>
   )
}
