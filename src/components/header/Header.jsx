
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import CartWidget from './CartWidget'
import { contexto } from '../context/GenericContext'

const Header = () => {
  const [anteriorPagina,setAnteriorPagina]=useState('')
  const {setEfectuarAnimacion}=useContext(contexto)

  const realizarAnimacion=(e,titulo)=>{
    if(e.id!==anteriorPagina){
      setEfectuarAnimacion("text-center animate__animated animate__bounceOutRight animate__faster animate__repeat-1")
      setAnteriorPagina(e.id)
    }   
  }

  return (
    <div className='bg-black flex justify-between'>
        <div className='w-28'>
            <Link to='/'>
              <img className='w-full' src="https://i.imgur.com/StLUTzK.png" alt="" />
            </Link>
        </div>
        <div className='flex justify-center items-center text-center font-bold text-2xl text-white tracking-widest mr-10'>
            <Link onClick={(e)=>realizarAnimacion(e.target,'Home')} id='home' to='/' className='mx-5 hover:border-b-4 hover:border-r-4'>INICIO</Link>
            <Link onClick={(e)=>realizarAnimacion(e.target,'Zapatillas Nike')} id='nike' to='/zapatillas/nike' className='mx-5 hover:border-b-4 hover:border-r-4'>NIKE</Link>            
            <Link onClick={(e)=>realizarAnimacion(e.target,'Zapatillas Adidas')} id='adidas' to='/zapatillas/adidas' className='mx-5 hover:border-b-4 hover:border-r-4'>ADIDAS</Link>            
            <Link onClick={(e)=>realizarAnimacion(e.target,'Otras-Zapatillas')} id='otras' to='/zapatillas/otras-zapatillas' className='mx-5 hover:border-b-4 hover:border-r-4'>OTRAS</Link>                      
            <CartWidget/>
        </div>
    </div>
  )
}

export default Header