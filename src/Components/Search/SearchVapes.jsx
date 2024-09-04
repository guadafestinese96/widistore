import { useState } from "react";
import usePerfumesDB from '../../hooks/usePerfumesDB';
import ItemList from "../Item/ItemList";
import './Search.css'

export default function SearchVapes(){
    const {products} = usePerfumesDB();
    const [search, setSearch] = useState("");

    const vapes = products.filter((product)=> product.idMarca === "vape");
    
    const searcher = (e)=>{
        setSearch(e.target.value);
        console.log(e.target.value);
    }


    const results = !search ? vapes : vapes.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLowerCase()))
    console.log(results);
    

     return(
         <div className="searchDiv">
             <input value={search} onChange={searcher} type="text" placeholder="Buscar Vape" className="inputSearch"/>
             <ItemList products={results}/>

        </div>
    )
}


