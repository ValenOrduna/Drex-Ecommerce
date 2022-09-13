
import StatusCartButton from "./StatusCartButton"

const Counter = ({stock,cantidad,setCantidad,estadoAgregar,setEstadoAgregar}) => {
  
  return (
    <>
      <div className="mt-5 mx-auto flex justify-between text-center items-center" style={{border:'2px solid black',width:'400px'}}>
        <p onClick={()=>cantidad>0&&setCantidad(cantidad-1)} className="font-bold text-blue-500 text-2xl cursor-pointer">-</p>
        <h4 className="font-bold text-2xl">{cantidad}</h4>
        <p onClick={()=>cantidad<stock&&estadoAgregar===true&&setCantidad(cantidad+1)} className="font-bold text-blue-500 text-2xl cursor-pointer">+</p>
      </div>
      {estadoAgregar===true && cantidad>0 ? <StatusCartButton estado={true}/>:<StatusCartButton estado={false}/>}
      <div>
        <h4 className="mt-5 font-bold text-xl">{stock>0?'Quedan '+Number(stock-cantidad)+' Unidades Disponibles':'No quedan Unidades Disponibles'}</h4>
      </div>
    </>
  )
}

export default Counter