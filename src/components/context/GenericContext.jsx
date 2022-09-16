import { createContext, useState } from "react"

export const contexto=createContext()

const GenericContext = ({children}) => {
    const [carrito,setCarrito]=useState([])
    const [efectuarAnimacion,setEfectuarAnimacion]=useState('text-center')

    const currency = (number)=>{
      return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
    };

    const agregarAlCarrito = (producto,cantidad) =>{
      
      let agregarProducto=true,actualizarCarrito=[]

      const promesaProducto= new Promise ((res,rej)=>{
        actualizarCarrito= carrito.map((elemento)=>{
          if(elemento.id===producto.id){
            elemento.cantidad+=cantidad
            agregarProducto=false
          }
          return elemento
        })
        res(actualizarCarrito)
      })

      promesaProducto
        .then((res)=>{
          if(agregarProducto){
            producto.cantidad=cantidad
            const nuevoCarrito=[...actualizarCarrito,producto]
            setCarrito(nuevoCarrito)
          }else{
            setCarrito(actualizarCarrito)
          }
        })
    }

  return (
    <contexto.Provider value={{efectuarAnimacion,setEfectuarAnimacion,currency,agregarAlCarrito,carrito}}>{children}</contexto.Provider>
  )
}

export default GenericContext