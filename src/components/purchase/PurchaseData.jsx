import { useForm } from 'react-hook-form'
import form from '../../css/form.module.css'
import { useContext } from 'react'
import { contexto } from "../context/GenericContext"
import Checkout from './Checkout'
import { useState } from 'react'

const PurchaseData = () => {
    const [estadoCompra,setEstadoCompra] = useState(false)
    const [datosCompra,setDatosCompra] = useState({})
    const {register,handleSubmit,formState:{errors}} = useForm()
    const {realizarCompra}=useContext(contexto)

    const mostrarAlertaValidar = (condicion,texto,texto2) =>{
        if(condicion==='required'){
            return texto
        }else if(condicion==='pattern'){
            return texto2
        }
    }

    const onSubmit = (data) =>{
        setDatosCompra(data)
        realizarCompra()
        setEstadoCompra(true)
    }

    return (
    <>
        {estadoCompra===false ?
        
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
            <h2 className='font-extrabold text-2xl my-5 uppercase'>Ingrese los datos de la compra</h2>

            <label htmlFor="nombre" className='font-bold uppercase mt-4'>Tu Nombre</label>
            <input
            className={form.input} 
            id='nombre' {...register('nombre',{
                required:true,
                pattern:/^[a-zA-Z\s]{3,254}/
            })} 
            placeholder='Ingrese tu nombre aqui...' 
            type="text"
            />
            {errors.nombre?.type&&<p className='bg-red-400 p-2 font-bold uppercase text-white'>{mostrarAlertaValidar(errors.nombre.type,'El campo nombre es requerido','El nombre ingresado no es valido')}</p>}

            <label htmlFor="apellido" className='font-bold uppercase mt-4'>Tu Apellido</label>
            <input
            className={form.input} 
            id='apellido' {...register('apellido',{
                required:true,
                pattern:/^[a-zA-Z\s]{3,254}/
            })}  
            placeholder='Ingrese tu apellido aqui...' 
            type="text"
            />
            {errors.apellido?.type&&<p className='bg-red-400 p-2 font-bold uppercase text-white'>{mostrarAlertaValidar(errors.apellido?.type,'El campo apellido es requerido','El apellido ingresado no es valido')}</p>}

            <label htmlFor="correo" className='font-bold uppercase mt-4'>Tu Correo</label>
            <input
            className={form.input} 
            id='correo' {...register('email',{
                required:true,
                pattern:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
            })}
            placeholder='Ingrese tu correo aqui...' 
            type="email"
            />
            {errors.email?.type&&<p  className='bg-red-400 p-2 font-bold uppercase text-white'>{mostrarAlertaValidar(errors.email?.type,'El campo correo es requerido','El correo ingresado no es valido')}</p>}

            <label htmlFor="celular" className='font-bold uppercase mt-4'>Tu numero de Celular</label>
            <input
            className={form.input} 
            id='celular' {...register('celular',{
                required:true,
                pattern:/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
            })}
            placeholder='Ingrese tu celular aqui...' 
            type="text"
            />
            {errors.celular?.type&&<p className='bg-red-400 p-2 font-bold uppercase text-white'>{mostrarAlertaValidar(errors.celular?.type,'El campo celular es requerido','El celular ingresado no es valido')}</p>}

            <label htmlFor="ciudad" className='font-bold uppercase mt-4'>Tu Ciudad</label>
            <input
            className={form.input} 
            id='ciudad' {...register('ciudad',{
                required:true,
                pattern:/^[a-zA-Z\s]{3,254}/
            })} 
            placeholder='Ingrese tu ciudad aqui...' 
            type="text"
            />
            {errors.ciudad?.type&&<p className='bg-red-400 p-2 font-bold uppercase text-white'>{mostrarAlertaValidar(errors.ciudad?.type,'El campo ciudad es requerido','La ciudad ingresada no es valida')}</p>}

            <label htmlFor="direccion" className='font-bold uppercase mt-4'>Tu Direccion</label>
            <input
            className={form.input} 
            id='direccion' {...register('direccion',{
                required:true,
                pattern:/^[a-zA-Z\s]{3,254}/
            })} 
            placeholder='Ingrese tu direccion aqui...' 
            type="text"
            />
            {errors.direccion?.type&&<p className='bg-red-400 p-2 font-bold uppercase text-white'>{mostrarAlertaValidar(errors.direccion?.type,'El campo direccion es requerido','La direccion ingresada no es valida')}</p>}

            <button className={form.boton}>Comprar</button>

        </form>
        :
        <Checkout datosCompra={datosCompra}/>}
    </>
    )
}

export default PurchaseData