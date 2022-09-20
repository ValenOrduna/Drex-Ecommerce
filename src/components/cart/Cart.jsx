import React, { useContext, useState } from 'react'
import { contexto } from '../context/GenericContext'
import CartTotal from './CartTotal'
import Swal from 'sweetalert2'
import ButtonCart from './ButtonCart'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {carrito,setCarrito,currency}=useContext(contexto)

  const mostrarAlerta = (producto) => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "Se borrara el producto de tu carrito!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El producto fue borrado exitosamente!',
          'success'
        )
        borrarElemento(producto)
      }
    })
  }

  const borrarElemento = (producto) => {
    const nuevoCarrito= carrito.filter(productos => productos.id != producto.id)
    setCarrito(nuevoCarrito)
  }

  return (
    <div>

      {carrito.length>0 ? 
      <div>
        <div className='w-5/6 mt-3 bg-black mx-auto flex justify-between items-center'>
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
          <div key={producto.id} className='w-5/6 bg-gray-500 border-4 border-black my-5 mx-auto flex justify-between items-center'>
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
            <div onClick={()=>mostrarAlerta(producto)} className='w-20'>
                <img className='w-full cursor-pointer' src="https://i.imgur.com/J1prqZ8.png" alt="" />
            </div>
          </div>
        )
        })}
        <CartTotal carrito={carrito} currency={currency} />
        <ButtonCart/>

      </div>
      
      :
      <div>
        <h2 className='font bold text-3xl uppercase italic text-center mt-80'>Lo siento, no hay productos agregados al carrito</h2>
        <div className="mt-40 flex justify-center">
        <Link to='/'>
            <button className="p-3 font-bold text-xl bg-black text-white mx-5 rounded-2xl">
                SEGUIR COMPRANDO
            </button>
        </Link> 
        </div>
      </div>
      }

    </div>
  )
}

export default Cart