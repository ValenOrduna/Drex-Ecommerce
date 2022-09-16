import React, { useContext, useState } from 'react'
import { contexto } from '../context/GenericContext'
import CartTotal from './CartTotal'

const Cart = () => {
  const [totalCarrito,setTotalCarrito]=useState()
  const {carrito,currency}=useContext(contexto)
  
  return (
    <div>

      {carrito.length>0 ? 
      <div>
        <div className='w-4/5 mt-3 bg-black mx-auto flex justify-between items-center'>
          <div className='w-1/4'>
            <h3 className='text-2xl font-bold text-white text-center uppercase'>Producto</h3>
          </div>
          <div className='w-3/4'>
            <h3 className='text-2xl font-bold text-white text-center uppercase'>Nombre</h3>
          </div>
          <div className='w-2/4'>
            <h3 className='text-2xl font-bold text-white text-center uppercase'>Cantidad</h3>
          </div>
          <div className='w-1/4'>
            <h3 className='text-2xl font-bold text-white text-center uppercase'>Total</h3>
          </div>
        </div>

        {carrito.map((producto)=>{
        return(
          <div key={producto.id} className='w-4/5 bg-gray-500 border-4 border-black my-5 mx-auto flex justify-between items-center'>
            <div className='w-1/4'>
              <img className='w-32' src={producto.imagen} alt=""/>
            </div>
            <div className='w-3/4'>
              <h3 className='font-bold text-2xl text-white uppercase text-center'>{producto.nombre}</h3>
            </div>
            <div className='w-2/4'>
              <h5 className='font-bold text-2xl text-white uppercase text-center '>{producto.cantidad}</h5>
            </div>
            <div className='w-1/4'>
              <h4 className='font-bold text-2xl text-white uppercase text-center '>{currency(producto.precio*producto.cantidad)}</h4>
            </div>
          </div>
        )
        })}
        <CartTotal carrito={carrito} currency={currency} />

      </div>
      
      :<h2 className='font bold text-3xl uppercase italic text-center mt-80'>Lo siento, no hay productos agregados al carrito</h2>}

    </div>
  )
}

export default Cart