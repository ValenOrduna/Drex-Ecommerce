import { useEffect, useState , useContext } from "react"
import ProductsContainer from "./ProductsContainer"
import { contexto } from "../context/GenericContext"
import {getDocs,collection,getFirestore} from 'firebase/firestore'

const CleaningProducts = () => {
    const {productos,setProductos} = useContext (contexto)
    const [promesaProductos,setPromesaProductos] = useState (false)

    useEffect(()=>{

        const db = getFirestore()
        const collectionRef = collection(db,'productos')

        getDocs(collectionRef).then((res)=>{
            const productosLimpios=res.docs.map((producto)=>{return {...producto.data(),id: producto.id}})
            setProductos(productosLimpios)
        })
        .finally(()=>setPromesaProductos(true))

    },[])

  return (
        <div>
            {promesaProductos && <ProductsContainer productos={productos}/>}
        </div>
    )
}

export default CleaningProducts