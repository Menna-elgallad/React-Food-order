import { useState } from "react"
import Modal from "./Modal"
import Cart from "../Cart/CartItems"
import { useContext } from "react"
import Cartcontext from "../../store/myCartContext"
const CartButton =()=>{
const [display , setDisplay ] = useState(false)
const opedmodal = ()=>{
    setDisplay(true)
   
}
const closedmodal = ()=>{
    setDisplay(false)
   
}
const ctxCart = useContext(Cartcontext)
console.log("vheaderbutton",ctxCart.items)
const numofitems = ctxCart.items.reduce((numitem , item) =>{
console.log( "return" , numitem + item.amount);
 return numitem + item.amount;
} , 0) ; 
    return (
        <>
            <div className="rounded-full  flex py-2 px-5 items-center  gap-2 cursor-pointer" style={{backgroundColor : '#00000052'}} onClick={opedmodal}>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ffff" d="M7.3 21q-.95 0-1.625-.688T5 18.675V9.4L3.175 5H2q-.425 0-.713-.288T1 4q0-.425.288-.713T2 3h1.85q.3 0 .55.175t.375.45L6.175 7H20.95q.575 0 .875.475t.025.975L19 14.025q1.275.2 2.138 1.175T22 17.5q0 1.45-1.012 2.475T18.524 21q-1.475 0-2.487-1.025T15.025 17.5q0-.5.125-.925t.35-.825l-3.275-.3l-3 4.5q-.325.5-.838.775T7.3 21Zm.025-2.025q.05 0 .225-.125l2.425-3.6q-1.225-.125-1.925-.587T7 13.7v5q0 .125.1.2t.225.075ZM18.5 19q.65 0 1.075-.438T20 17.5q0-.65-.425-1.075T18.5 16q-.625 0-1.063.425T17 17.5q0 .625.438 1.063T18.5 19Z"></path></svg></span>
                <span>Your Cart</span>
                <span className="rounded-full bg-red-900 w-10 h-10 grid place-content-center">{numofitems}</span>
            </div>
            {display && <Modal display={display} cancel={closedmodal} > <Cart close={closedmodal}></Cart></Modal>}
        </>
    )
} 
export default CartButton