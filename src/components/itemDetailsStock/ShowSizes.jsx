import { useEffect, useState } from "react"


const ShowSizes = ({talles,stock,setStock,setCantidad,setEstadoAgregar}) => {
    
    const [tallesDisponibles,setTallesDisponibles]=useState([])
    const [estadoStock,setEstadoStock]=useState(false)

    useEffect(()=>{
        const promesaStock=new Promise ((res,rej)=>{
            let totalStock=0,totalTalle=[['ELIGE UN TALLE','']],tallesDePrendas=38
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
        <select className="p-2 bg-black text-white font-bold my-5 text-center" name="talles">
            {tallesDisponibles.map((talle)=>{
                let estadoTalle=true
                talle[1]===0 ? estadoTalle=false : estadoTalle=true
                if(estadoTalle){
                    return <option key={talle[0]}  onClick={(e)=>{
                        setStock(e.target.value)
                        setCantidad(0)
                        setEstadoAgregar(true)
                    }} value={talle[1]}>{talle[0]}</option>
                }else{
                    return <option key={talle[0]}  disabled value={talle[1]}>{talle[0]}</option>
                }
            })}
        </select>
    </div>
  )
}

export default ShowSizes