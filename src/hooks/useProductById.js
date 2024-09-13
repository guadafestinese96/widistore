import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";


export default function useProductById(id) {

    const [product, setProduct] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
    
        const productRef = doc(db, "products", id);
        getDoc(productRef)
          .then((doc) => {
            if (doc.exists()) {
              setProduct({
                id: doc.id, //ESTE ES EL ID DE FB
                ...doc.data(),
              });
            } else {
              alert("No such document!");
            }
          })
          .finally(() => setLoading(false));
      }, [id]);
    
    return {product, loading};
}