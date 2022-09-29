import { useContext } from "react"
import { contexto } from "../context/GenericContext"
import { Link } from "react-router-dom"


const Checkout = ({datosCompra}) => {
    const {idCompra}=useContext(contexto)
    return (
    <div>
        <div className='flex flex-col items-center font-bold text-xl mt-20'>
            <h2 className='uppercase font-extrabold'>Datos compra</h2>
            <h3 className='my-2'><span className='uppercase text-violet-500'>Nombre y Apellido:</span> {datosCompra.nombre} {datosCompra.apellido}</h3>
            <h4 className='my-2'><span className='uppercase text-violet-500'>Email:</span> {datosCompra.email}</h4>
            <h5 className='my-2'><span className='uppercase text-violet-500'>Telefono:</span> {datosCompra.celular}</h5>
            <h4 className='my-2'><span className='uppercase text-violet-500'>Ciudad:</span> {datosCompra.ciudad}, {datosCompra.direccion}</h4>
        </div>
        <h2 className='font bold text-3xl uppercase italic text-center mt-20 font-bold'>Has Finalizado tu Compra! Muchas gracias por confiar en nosotros, el identificador de tu orden es<br/> <span className="font-bold text-red-700">{idCompra}</span></h2>
        <div className="mt-40 flex justify-center">
        <Link to='/'>
            <button className="p-3 font-bold text-xl bg-black text-white mx-5 rounded-2xl">
                SEGUIR COMPRANDO
            </button>
        </Link> 
        </div>
    </div>
    )
}

export default Checkout