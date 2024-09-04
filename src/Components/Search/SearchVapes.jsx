import { useState } from "react";
import usePerfumesDB from '../../hooks/usePerfumesDB';
import ItemList from "../Item/ItemList";
import './Search.css'
import lupa from '../../../public/lupa.png'

export default function SearchVapes(){
    const {products, loading} = usePerfumesDB();
    const [search, setSearch] = useState("");

    const vapes = products.filter((product)=> product.idMarca === "vape");
    
    const searcher = (e)=>{
        setSearch(e.target.value);
        console.log(e.target.value);
    }


    const results = !search ? vapes : vapes.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLowerCase()))
    console.log(results);
    
    if(loading) return <h2></h2>
     return(
         <div className="searchDiv">
            <div className="input">
                <img src={lupa} alt="lupa" className="lupa"/>
                <input value={search} onChange={searcher} type="text" placeholder="Buscar Vape" className="inputSearch"/>
             </div>
             <ItemList products={results}/>

        </div>
    )
}


