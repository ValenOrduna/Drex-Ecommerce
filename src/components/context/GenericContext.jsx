import { createContext, useState } from "react"
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useEffect } from "react"
export const contexto=createContext()

const GenericContext = ({children}) => {
    const [productos,setProductos] = useState ([])
    const [carrito,setCarrito]=useState([])
    const [efectuarAnimacion,setEfectuarAnimacion]=useState('text-center')
    const [idCompra,setIdCompra] = useState ('')

    const currency = (number)=>{
      return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
    };
    useEffect(()=>{
      JSON.parse(localStorage.getItem('carrito')) && setCarrito(JSON.parse(localStorage.getItem('carrito')))
    },[])
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
            actualizarLocalStorage(nuevoCarrito)
          }else{
            setCarrito(actualizarCarrito)
            actualizarLocalStorage(actualizarCarrito)
          }
        })
    }

    const realizarCompra = () => {
      console.log('llegue')
      const moment = require('moment');
      const now = moment().format("DD/MM/YYYY HH:mm:ss A");
      const promesaCompra = new Promise ((res)=>{
        let order=[]
        carrito.map ((producto) => {
          const orderProducto = {nombre:producto.nombre,precio:Number(producto.precio),cantidad:producto.cantidad,fecha:now,estado:false}
          order=[...order,orderProducto]
        })
        res(order)
      })
      .then((res)=>{
        const db = getFirestore()
        const collectionRef = collection (db,'orders')
        addDoc(collectionRef,Object.assign({}, res)).then(({id})=>{setIdCompra(id)})
        setCarrito([])
      })
    }

    const actualizarLocalStorage = (actualizar) =>{
      localStorage.setItem('carrito',JSON.stringify(actualizar))
    }

  return (
    <contexto.Provider value={{productos,setProductos,efectuarAnimacion,setEfectuarAnimacion,currency,agregarAlCarrito,carrito,setCarrito,realizarCompra,idCompra,actualizarLocalStorage}}>{children}</contexto.Provider>
  )
}

export default GenericContext