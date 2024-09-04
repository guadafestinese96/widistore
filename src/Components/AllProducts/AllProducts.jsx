import SearchPerfumes from "../Search/SearchPerfumes";
import SearchVapes from "../Search/SearchVapes";
import './AllProducts.css'

export default function AllProducts(){
    return(
        <div className="divAllProducts">
        <SearchPerfumes/>
        <SearchVapes/>
        </div>
    )
}

