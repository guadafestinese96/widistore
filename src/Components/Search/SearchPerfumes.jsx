import { useState } from "react";
import usePerfumesDB from '../../hooks/usePerfumesDB';
import Item from "../Item/Item";
import ItemList from "../Item/ItemList";

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
             <input value={search} onChange={searcher} type="text" placeholder="Buscar Perfume" className="inputSearch"/>
             <ItemList products={results}/>

        </div>
    )
}


