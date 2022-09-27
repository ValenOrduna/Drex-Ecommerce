import { useContext } from "react"
import { contexto } from "../context/GenericContext"
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useEffect } from "react"
import { Link } from "react-router-dom"


const Checkout = () => {
    const {idCompra,estadoCompra}=useContext(contexto)

    return (
    <div>
        {estadoCompra===true 
        ?<h2 className='font bold text-3xl uppercase italic text-center mt-80 font-bold'>Has Finalizado tu Compra! Muchas gracias por confiar en nosotros, el identificador de tu orden es<br/> <span className="font-bold text-red-700">{idCompra}</span></h2>
        :<h2 className='font bold text-3xl uppercase italic text-center mt-80 font-bold'>No has realizado ninguna compra. Vuelve al incio e intenta nuevamente, muchas gracias</h2>}
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