import { Link } from "react-router-dom"

const StatusCartButton = ({estado}) => {
  return (
    <div>
        {estado===true ? 
        <div className="p-2 bg-black text-white font-bold my-5 text-center">
          <Link to='/cart'>
            <button>AGREGAR AL CARRITO</button>
          </Link>
        </div>:
          <Link to='/cart'>
            <div className="p-2 bg-black text-white font-bold my-5 text-center opacity-40">
                <button disabled>AGREGAR AL CARRITO</button>
            </div>
          </Link>
        }
    </div>
  )
}

export default StatusCartButton