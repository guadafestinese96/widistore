
export default function FilterProductsByGender(products, gender){
    const filteredProducts = products.filter((product)=>product.genero === gender)

    return filteredProducts;
}

