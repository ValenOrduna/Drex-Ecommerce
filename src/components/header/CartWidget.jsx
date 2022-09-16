import { useContext } from "react"
import { contexto } from "../context/GenericContext"

const CartWidget = () => {
  const {carrito}=useContext(contexto)
  return (
    <div>
        <div className="w-10 flex justify-center items-center text-center ml-5 mr-3">
            <img className="mx-3" src="https://i.imgur.com/9OhHKlK.png" alt=""/>
            <p className="p-2 bg-white rounded-3xl text-xl text-red-600 font-bold">{carrito.length}</p>
        </div>
    </div>
  )
}

export default CartWidget