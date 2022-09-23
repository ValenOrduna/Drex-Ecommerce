import { useContext, useEffect, useState } from "react"
import ShowProducts from "./ShowProducts"
import { useParams } from "react-router-dom"
import { contexto } from "../context/GenericContext"

const ProductsContainer = ({productos}) => {
    const [totalProductos,setTotalProductos] = useState([])
    const [estadoPromesa,setEstadoPromesa] = useState(false)
    const [tituloPagina,setTituloPagina] = useState('')
    const {idmarca} = useParams()
    const {setEfectuarAnimacion} = useContext(contexto)

    useEffect(()=>{

        const promesaProducto= new Promise((res)=>{
            if(idmarca!==undefined){
                if(idmarca==='otras-zapatillas'){
                    const filtradoDeProductos= productos.filter(producto => producto.marca!=='nike'&&producto.marca!=='adidas')
                    res(filtradoDeProductos) 
                    setTituloPagina('Otras de nuestras zapatillas') 
                }else{
                    const filtradoDeProductos= productos.filter(producto => producto.marca===idmarca)
                    res(filtradoDeProductos) 
                    setTituloPagina('Nuestras zapatillas '+idmarca) 
                }  
            }else{
                const filtradoDeProductos= productos.filter(producto => producto.valoracion>=7)
                setTituloPagina('Nuestras zapatillas mas valoradas')
                res(filtradoDeProductos)  
            }
        })

        promesaProducto
            .then((res)=>{setTotalProductos(res)})
            .finally(()=>{
                setEstadoPromesa(true)
            })
            
        setTimeout(() => {
            setEfectuarAnimacion("text-center animate__animated animate__backInLeft animate__faster animate__repeat-1")
        }, 200);
    },[idmarca])

  return (
    <div>
        { estadoPromesa===true && <ShowProducts totalProductos={totalProductos} tituloPagina={tituloPagina} /> }
    </div>
  )
}

export default ProductsContainer