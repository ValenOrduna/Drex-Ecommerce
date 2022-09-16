import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productos } from "../../mocks/products"
import { Link } from "react-router-dom"
import ItemDetailStockContainer from "../itemDetailsStock/ItemDetailStockContainer"
import { contexto } from "../context/GenericContext"

const ItemDetails = () => {
  const [producto,setProducto]=useState({})
  const [estadoPromesa,setEstadoPromesa]=useState(false)
  const [volverAnterior,setVolverAnterior]=useState('')
  const {idmarca,idzapatilla}=useParams()
  const {currency}=useContext(contexto)
  
  useEffect(()=>{
  
    const promesaProducto= new Promise ((res,rej)=>{

      const detectarProducto=productos.filter((producto)=>{
        if(producto.marca===idmarca&&producto.nombre.replace(/ /g, "")===idzapatilla){
            return producto
        }
      })

      res(detectarProducto)
      
    })

    promesaProducto
    .then((res)=>setProducto(res))
    .finally(()=>{
      setEstadoPromesa(true)
      idmarca !== 'nike' && idmarca !== 'adidas'  ? setVolverAnterior('/') : setVolverAnterior('/zapatillas/'+idmarca)
    })
      
  },[idmarca])

  return (

    <div>
      {estadoPromesa===true&&

        <div className="text-center">

          <Link to={volverAnterior}>
            <img className="w-20 mt-5 ml-5 cursor-pointer" src="https://i.imgur.com/mzzMkGS.png" alt="atras"/>
          </Link>

          <div className="w-3/5 flex mx-auto justify-between">

            <div className="w-2/4">
              <img className="w-full" src={producto[0].imagen} alt={idzapatilla} />
            </div>

            <div>
              <h2 className="font-bold text-2xl uppercase my-5">{producto[0].nombre}</h2>
              <h3 className="font-bold text-2xl uppercase text-red-600 my-5">{currency(producto[0].precio)}</h3>
              <ItemDetailStockContainer talles={producto[0].talles} producto={producto[0]} />
            </div>

          </div>

        </div>
      }
    </div>
  )
  
}

export default ItemDetails