import { useState } from "react"
import { doc, getFirestore, getDoc, updateDoc} from 'firebase/firestore'

const Valoration = ({producto}) => {
    const [permisoValorar,setPermisoValorar] = useState(true)
    const [opacidadEstrella,setOpacidadEstrella] = useState([])
    const verEstrellas = (e) => {
        if (permisoValorar===true) {
            let verEstrella = []
            for (let i = 0; i < e; i++) {
                verEstrella=[...verEstrella,'opacity-100']
            }
            setOpacidadEstrella(verEstrella)
        }
    }
    const ocultarEstrellas = () => {
        if (permisoValorar===true) {
            setOpacidadEstrella([])
        }
    }

    const valorar = (e) =>{
        verEstrellas(e)
        setPermisoValorar(false)
        const db = getFirestore()
        const collectionRef = doc(db,'productos',''+producto)
        getDoc(collectionRef).then((res)=>{
            const valoracionTotal=Number(res.data().valoracion)
            updateDoc(collectionRef,{valoracion:valoracionTotal+Number(e)})
        })
    }
    return (
    <div className="flex justify-center items-center mt-3">
        <img onClick={(e)=>valorar(e.target.id)} onMouseEnter={(e)=>verEstrellas(e.target.id)} onMouseLeave={(e)=>ocultarEstrellas(e.target.id)} id='1' className={'w-8 cursor-pointer opacity-40 '+opacidadEstrella[0]} src="https://i.imgur.com/Opkfkxz.png" alt="" />
        <img onClick={(e)=>valorar(e.target.id)} onMouseEnter={(e)=>verEstrellas(e.target.id)} onMouseLeave={(e)=>ocultarEstrellas(e.target.id)} id='2' className={'w-8 cursor-pointer opacity-40 '+opacidadEstrella[1]} src="https://i.imgur.com/Opkfkxz.png" alt="" />
        <img onClick={(e)=>valorar(e.target.id)} onMouseEnter={(e)=>verEstrellas(e.target.id)} onMouseLeave={(e)=>ocultarEstrellas(e.target.id)} id='3' className={'w-8 cursor-pointer opacity-40 '+opacidadEstrella[2]} src="https://i.imgur.com/Opkfkxz.png" alt="" />
        <img onClick={(e)=>valorar(e.target.id)} onMouseEnter={(e)=>verEstrellas(e.target.id)} onMouseLeave={(e)=>ocultarEstrellas(e.target.id)} id='4' className={'w-8 cursor-pointer opacity-40 '+opacidadEstrella[3]} src="https://i.imgur.com/Opkfkxz.png" alt="" />
        <img onClick={(e)=>valorar(e.target.id)} onMouseEnter={(e)=>verEstrellas(e.target.id)} onMouseLeave={(e)=>ocultarEstrellas(e.target.id)} id='5' className={'w-8 cursor-pointer opacity-40 '+opacidadEstrella[4]} src="https://i.imgur.com/Opkfkxz.png" alt="" />
    </div>
    )
}

export default Valoration