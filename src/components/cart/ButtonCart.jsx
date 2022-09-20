import { Link } from "react-router-dom"

const ButtonCart = () => {
  return (
    <div className="mt-40 flex justify-center">
        <Link to='/'>
            <button className="p-3 font-bold text-xl bg-black text-white mx-5 rounded-2xl">
                SEGUIR COMPRANDO
            </button>
        </Link>

        <Link to='/checkout'>
            <button className="p-3 font-bold text-xl bg-red-700 text-white mx-5 rounded-2xl">
                FINALIZAR COMPRA
            </button>
        </Link>
        
    </div>
  )
}

export default ButtonCart