import {getDocs, collection, getFirestore} from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'
import SearchPackage from './SearchPackage'

const ViewPurchase = () => {
    const [totalOrdenes,setTotalOrdenes] = useState([])

    useEffect(()=>{
        const db = getFirestore()
        const collectionRef = collection (db,'orders')
        getDocs(collectionRef).then((res)=>{
            const ordenesLimpias=res.docs.map((orden)=>{
                let fecha=''
                let estado=false
                for (let i = 0; i < 1; i++) {
                    fecha=orden.data()[i].fecha
                    estado=orden.data()[i].estado
                }
                return {...orden.data(),id: orden.id,fecha:fecha,estado:estado}})
            setTotalOrdenes(ordenesLimpias)
        })
    },[])
    
    return (
    <div>
        <div className='flex justify-center items-center bg-black w-4/5 mx-auto mt-3 p-5'>
            <h3 className='font-bold text-2xl italic w-1/2 text-white uppercase'>Id</h3>
            <h3 className='font-bold text-2xl italic w-1/3 text-white uppercase'>Fecha</h3>
        </div>
        {totalOrdenes.map((orden)=>{
        return(
            
            <div key={orden.id} className='flex justify-center items-center bg-green-400 w-4/5 mx-auto mt-3 p-5'>
                <h2 className='font-bold text-2xl italic w-1/2'>{orden.id}</h2>
                <h2 className='font-bold text-2xl italic w-1/3'>{orden.fecha}</h2>
            </div>
            
        )
        })}
        <SearchPackage totalOrdenes={totalOrdenes}/>
    </div>
    )
}

export default ViewPurchase