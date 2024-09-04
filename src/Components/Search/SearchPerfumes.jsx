import { useState } from "react";
import usePerfumesDB from '../../hooks/usePerfumesDB';
import Item from "../Item/Item";
import ItemList from "../Item/ItemList";
import lupa from '../../../public/lupa.png'

export default function Search(){
    const {products} = usePerfumesDB();
    const [search, setSearch] = useState("");

    const perfumes = products.filter((product)=> product.idMarca != "vape");
    
    
    const searcher = (e)=>{
        setSearch(e.target.value);
        console.log(e.target.value);
    }


    const results = !search ? perfumes : perfumes.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLowerCase()))
    console.log(results);
    

     return(
         <div className="searchDiv">
             <div className="input">
                <img src={lupa} alt="lupa" className="lupa"/>
                <input value={search} onChange={searcher} type="text" placeholder="Buscar Perfume" className="inputSearch"/>
             </div>
             <ItemList products={results}/>

        </div>
    )
}


