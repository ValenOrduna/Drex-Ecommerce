import { useEffect, useState } from "react"
import { productos } from "../../mocks/products"
import ShowProducts from "./ShowProducts"
import { useParams } from "react-router-dom"

const ProductsContainer = ({efectuarAnimacion,setEfectuarAnimacion,currency}) => {
    const [totalProductos,setTotalProductos]=useState([])
    const [estadoPromesa,setEstadoPromesa]=useState(false)
    const [tituloPagina,setTituloPagina]=useState('')
    const {idmarca}=useParams()

    const generadorDeID=()=>{
        
        let d = new Date().getTime();
        const uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;

    }

    useEffect(()=>{

        setTimeout(() => {
            setEfectuarAnimacion("text-center animate__animated animate__backInLeft animate__faster animate__repeat-1")
        }, 200);

        const promesaProducto= new Promise((res,rej)=>{
            if(idmarca!==undefined){
                if(idmarca==='otras-zapatillas'){
                    const filtradoDeProductos=productos.filter((producto)=>{
                        producto.id=generadorDeID()
                        if(producto.marca!=='nike'&&producto.marca!=='adidas'){
                            return producto
                        }
                    })
                    res(filtradoDeProductos) 
                    setTituloPagina('Otras de nuestras zapatillas') 
                }else{
                    const filtradoDeProductos=productos.filter((producto)=>{
                        producto.id=generadorDeID()
                        if(producto.marca===idmarca){
                            return producto
                        }
                    })
                    res(filtradoDeProductos) 
                    setTituloPagina('Nuestras zapatillas '+idmarca) 
                }  
            }else{
                const filtradoDeProductos=productos.filter((producto)=>{
                    producto.id=generadorDeID()
                    if(producto.valoracion>=7){
                        return producto
                    }
                })
                setTituloPagina('Nuestras zapatillas mas valoradas')
                res(filtradoDeProductos)  
            }
        })

        promesaProducto
            .then((res)=>setTotalProductos(res))
            .finally(()=>{
                setEstadoPromesa(true)
            })
        
    },[idmarca])

  return (
    <div>
        { estadoPromesa===true && <ShowProducts totalProductos={totalProductos} tituloPagina={tituloPagina} efectuarAnimacion={efectuarAnimacion} currency={currency} /> }
    </div>
  )
}

export default ProductsContainer