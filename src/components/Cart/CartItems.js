import { useContext } from "react"
import Cartcontext from "../../store/myCartContext"
export default function Cart(props){
    const ctx = useContext(Cartcontext)
const close = ()=>{
    props.close()
}
const additem  = (item )=>{
    ctx.addtocart({...item ,amount: 1})

}
const removeitem  = (id )=>{
    ctx.removeFromCart(id)

}
    return(
        <div className=" w-full">
        {/* <h3 className=" font-medium text-black">Cart items</h3> */}
       
            <ul >
               
                 {ctx.items.map((item) =>{ 
                    return <li className=" text-zinc-700 text-md font-normal  flex justify-between border-b-red-900 border-b-[1px] py-2 "> 
                    <div className="flex items-center">  
                    <div className="data1">   <p>{item.name} </p>
                     <p className=" text-sm text-red-900 font-bold">{item.price }$</p>  </div>
                  <div className="data2 rounded-md bg-white px-2 text-sm border-[1px] ml-2 font-bold"> x {item.amount} </div>
                     </div>
                     <div className="actions flex items-center gap-2"> <button class="bg-transparent hover:bg-red-500 text-red-900 font-semibold hover:text-white  px-4 border border-red-800 hover:border-transparent rounded" onClick={additem.bind(null , item)}>+</button> 
<button class="bg-transparent hover:bg-red-500 text-red-900 font-semibold hover:text-white  px-4 border border-red-800 hover:border-transparent rounded" onClick={removeitem.bind(null , item.id)}> -</button>  </div></li> 
                 })}
            </ul>
            <div className="totalAmount flex justify-between font-bold mt-3">
               
                    <p className="  text-zinc-800">Total amount </p>
                    <p className="  text-zinc-800" > {Math.abs( ctx.totalAmount.toFixed(1))} $ </p>
             </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                   {ctx.items.length > 0 && <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Order</button>}
                   <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={close}>Cancel</button>
                 </div>
            </div>
        
    )
}