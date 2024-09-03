export default function filterByMark(products, mark){
    const filteredProducts = products.filter((product)=>product.idMarca === mark)
    return filteredProducts;
}