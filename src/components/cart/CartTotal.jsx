import { useEffect, useState } from "react"


const CartTotal = ({carrito,currency}) => {
    const [totalCarrito,setTotalCarrito]=useState(0)

    useEffect(()=>{
        const promesaCarrito= new Promise ((res,rej)=>{

            let totalCarrito=0
            carrito.map((producto)=>{
                totalCarrito+=producto.precio*producto.cantidad
            })

            res(totalCarrito)
        })
        promesaCarrito
            .then((res)=>setTotalCarrito(res))
    },[carrito])

  return (
    <div className="w-10/12">
        <div className="p-2 bg-black w-1/6 text-center float-right">
            <h3 className="font-bold text-2xl italic text-white uppercase">Total: {currency(totalCarrito)} </h3>
        </div>
    </div>
  )
}

export default CartTotal