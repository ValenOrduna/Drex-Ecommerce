import {getDocs, collection, getFirestore} from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'

const ViewPurchase = () => {
    const [totalOrdenes,setTotalOrdenes] = useState([])
    const [estadoPromesa,setEstadoPromesa] = useState(false)

    useEffect(()=>{
        const db = getFirestore()
        const collectionRef = collection (db,'orders')
        getDocs(collectionRef).then((res)=>{
            const ordenesLimpias=res.docs.map((orden)=>{return {...orden.data(),id: orden.id}})
            setTotalOrdenes(ordenesLimpias)
        })
    },[])
    
    return (
    <div>
        {totalOrdenes.map((orden)=>{
        return(
            <h2>{orden.id}</h2>
        )
        })}
    </div>
    )
}

export default ViewPurchase