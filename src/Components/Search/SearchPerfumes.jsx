import { useState } from "react";
import usePerfumesDB from '../../hooks/usePerfumesDB';
import ItemList from "../Item/ItemList";
import lupa from '../../../public/lupa.png'
import './Search.css'

export default function SearchPerfumes(){
    const {products, loading} = usePerfumesDB();
    const [search, setSearch] = useState("");

    const perfumes = products.filter((product)=> product.idMarca != "vape");
    
    
    const searcher = (e)=>{
        setSearch(e.target.value);
        console.log(e.target.value);
    }


    const results = !search ? perfumes : perfumes.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLowerCase()))
    console.log(results);
    
    if(loading) return <h2 className="loading">Cargando...</h2>
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


