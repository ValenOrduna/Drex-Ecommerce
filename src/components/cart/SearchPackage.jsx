import { useState } from 'react'
import search from '../../css/search.module.css'
import Swal from 'sweetalert2'

const SearchPackage = ({totalOrdenes}) => {
    const [idPaquete,setIdPaquete] = useState('')


    const mostrarAlerta = (texto,descripcion,icono) => {
        Swal.fire(
            texto,
            descripcion,
            icono
        )
    }

    const handleInputChange = ({target}) => {
        setIdPaquete(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(idPaquete!==''){
            const buscar = totalOrdenes.find(orden => orden.id === idPaquete);
            if(buscar===undefined){
                mostrarAlerta('No hemos encontrado el paquete','El ID de paquete ingresado no es correcto,vuelve a intentarlo!','error')
            }else if(buscar.estado===false){
                mostrarAlerta('El paquete esta en proceso','El paquete ingresado esta en proceso, pronto sera despachado!','info')
            }else{
                mostrarAlerta('El paquete ya ha sido entregado!','El paquete ya fue despachado, dentro de poco llegara!','success')
            }
        }
        setIdPaquete('')
    }

    return (
    <div>
        <form onSubmit={handleSubmit} className='flex justify-center items-center my-7'>
            <input onChange={handleInputChange} value={idPaquete} placeholder='Busca tu paquete aqui...' className={search.styleInput} type="text" />
            <button className={search.styleBtn}>Buscar</button>
        </form>
    </div>
    )
}

export default SearchPackage