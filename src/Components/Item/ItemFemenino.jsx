import usePerfumesDB from "../../hooks/usePerfumesDB";
import ItemList from "./ItemList";
import FilterProductsByGender from "../FilterProducts/FilterProductsByGender";

export default function ItemFemenino(){
    const {products} = usePerfumesDB();
    const femenino = FilterProductsByGender(products, "femenino");
    return(
        <div className="femeninoContainer">
        <ItemList products={femenino}/>
        </div>
    )
}

