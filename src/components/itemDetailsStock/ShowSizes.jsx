import { useEffect, useState } from "react"


const ShowSizes = ({talles,stock,setStock,setCantidad,setEstadoAgregar}) => {
    const [tallesDisponibles,setTallesDisponibles]=useState([])
    const [estadoStock,setEstadoStock]=useState(false)

    const handleClick = (e) =>{
        setStock(e.target.value)
        setCantidad(0)
        setEstadoAgregar(true)
    }

    useEffect(()=>{
        const promesaStock=new Promise ((res,rej)=>{
            let totalStock=0,totalTalle=[],tallesDePrendas=38
            talles.map((talle)=>{
                tallesDePrendas+=1
                const cadaTalle=[tallesDePrendas,talle]
                totalTalle=[...totalTalle,cadaTalle]
                totalStock+=talle
            })
            setTallesDisponibles(totalTalle)
            res(totalStock)
        })
        promesaStock
            .then((res)=>{setStock(res)})
            .finally(()=>setEstadoStock(true))
    },[])


  return (
    <div>
        <div>
            {tallesDisponibles.map((talle)=>{
                if(talle[1]!==0){
                    return <button className="p-2 mx-3 font-bold text-white bg-black" onClick={(e)=>handleClick(e)} key={talle[0]} value={talle[1]}>{talle[0]}</button>
                }else{
                    return <button className="p-2 mx-3 font-bold text-white bg-black opacity-30" key={talle[0]}  disabled value={talle[1]}>{talle[0]}</button>
                }
            })}
        </div>
    </div>
  )
}

export default ShowSizes