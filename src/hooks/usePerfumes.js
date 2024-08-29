import { useState } from 'react';

export default function usePerfumes(arrayPerfumes){
    const [perfumes, setPerfumes] = useState(arrayPerfumes);

    return(
        {perfumes}
    )
}