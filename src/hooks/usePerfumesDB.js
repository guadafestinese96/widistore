import {collection, getDocs, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function usePerfumesDB(){
    const [products, setProducts] = useState([]);
    //inicializo con un array vacio
    const [loading, setLoading] = useState(true);
    //inicializo cargando en true

    useEffect(()=>{
        const data = getFirestore();
        const productsCollection = collection(data, "perfumes");
        console.log(productsCollection);
        
        //le asigno a data, la colleccion perfumes

        getDocs(productsCollection).then((snapshot)=>{
            setProducts(snapshot.docs.map((doc)=> doc.data())).finally(()=>{
                setLoading(false);
            })
        })

    }, []);

    return(
        {products, loading}
    )
}