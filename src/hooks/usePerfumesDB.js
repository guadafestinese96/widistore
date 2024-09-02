import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";


export default function usePerfumesDB(idMarca) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const productsCollection = collection(db, "products");
        if (idMarca) {
          const productsQuery = query(
            productsCollection,
            where("idMarca", "==", idMarca)
          );
    
          getDocs(productsQuery)
            .then((snapshot) => {
              setProducts(
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }))
              );
            })
            .finally(() => setLoading(false));
        } else {
          getDocs(productsCollection)
            .then((snapshot) => {
              setProducts(
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }))
              );
            })
            .finally(() => setLoading(false));
        }
      }, [idMarca]);

      


    return {
        products,
        loading,
    };
}
/*
export default function usePerfumesDB(idMarca) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const productCollection = collection(db, "products");

        getDocs(productCollection).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => doc.data()))
        }).finally(() => {
            setLoading(false);
        });

    }, [])


    return {
        products,
        loading,
    };
}
*/
