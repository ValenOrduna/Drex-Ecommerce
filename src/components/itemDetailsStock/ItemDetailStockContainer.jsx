import { useState } from "react"
import Counter from "./Counter"
import ShowSizes from "./ShowSizes"

const ItemDetailStockContainer = ({talles,producto}) => {
  const [stock,setStock]=useState(0)
  const [cantidad,setCantidad]=useState(0)
  const [estadoAgregar,setEstadoAgregar]=useState(false)
  return (
    <div>
        <ShowSizes talles={talles} stock={stock} setStock={setStock} setCantidad={setCantidad} setEstadoAgregar={setEstadoAgregar} />
        <Counter stock={stock} cantidad={cantidad} setCantidad={setCantidad} estadoAgregar={estadoAgregar} setEstadoAgregar={setEstadoAgregar} producto={producto} />
    </div>
  )
}

export default ItemDetailStockContainer