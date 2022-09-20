import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { contexto } from "../context/GenericContext"

const CartWidget = () => {
  const [totalCarrito,setTotalCarrito]=useState(0)
  const {carrito}=useContext(contexto)
  useEffect(()=>{
    let sumarTotalCarrito=0
    carrito.map((productos)=>{
      sumarTotalCarrito+=productos.cantidad
    })
    setTotalCarrito(sumarTotalCarrito)
  },[carrito])
  return (
    <div>
        <div className="w-10 flex justify-center items-center text-center ml-5 mr-3">
            <img className="mx-3" src="https://i.imgur.com/9OhHKlK.png" alt=""/>
            <p className="p-2 bg-white rounded-3xl text-xl text-red-600 font-bold">{totalCarrito}</p>
        </div>
    </div>
  )
}

export default CartWidget