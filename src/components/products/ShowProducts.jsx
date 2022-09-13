import { Link } from "react-router-dom"

const ShowProducts = ({totalProductos,tituloPagina,efectuarAnimacion,currency}) => {

  return (
    <>

      <div className={efectuarAnimacion}>
          <h2 className="font-bold my-10 text-4xl uppercase">{tituloPagina}</h2>
          
        <div className="flex flex-wrap justify-center text-center">
          {totalProductos.map((producto)=>{
              const {id,imagen,nombre,precio,talles,marca}=producto
              return(
                <div className="w-1/4 m-10" key={id}>
                  <img className="w-full" src={imagen} alt="" />
                  <h2 className="font-bold text-xl tracking-widest">{nombre}</h2>
                  <h3 className="font-bold text-red-500 tracking-wider text-xl mt-5 mb-6">{currency(precio)}</h3>
                  <Link to={'/zapatilla/'+marca+'/'+nombre.replace(/ /g, "")}>
                    <button className="p-3 bg-black text-white font-bold rounded-xl">VER MAS
                    </button>
                  </Link>
                </div>
              ) 
          })}
        </div>
      </div>

    </>
  )
}

export default ShowProducts