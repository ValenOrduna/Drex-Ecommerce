import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "../context/GenericContext"

const StatusCartButton = ({estado,producto,cantidad}) => {
  const {agregarAlCarrito}=useContext(contexto)
  
  return (
    <div>
        {estado===true ? 
        <div className="p-2 bg-black text-white font-bold my-5 text-center">
          <Link to='/cart'>
            <button onClick={()=>agregarAlCarrito(producto,cantidad)}>AGREGAR AL CARRITO</button>
          </Link>
        </div>:
          <Link to='' className="cursor-default">
            <div className="p-2 bg-black text-white font-bold my-5 text-center opacity-40">
                <button disabled>AGREGAR AL CARRITO</button>
            </div>
          </Link>
        }
    </div>
  )
}

export default StatusCartButton