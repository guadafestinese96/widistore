import usePerfumesDB from "../../hooks/usePerfumesDB";
import ItemList from "./ItemList";
import FilterProductsByGender from "../FilterProducts/FilterProductsByGender";

export default function ItemMasculino(){
    const {products} = usePerfumesDB();
    const masculino = FilterProductsByGender(products, "masculino");
    return(
        <ItemList products={masculino}/>
    )
}
