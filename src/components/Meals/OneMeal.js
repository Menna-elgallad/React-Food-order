import MealForm from "./MealForm"
import cartcontext from "../../store/myCartContext"
import { useContext } from "react"
export default function OneMeal(props) {
    const cartcontx = useContext(cartcontext)
    const onadd = (amount ) =>{
        console.log({
            id : props.id , 
            name : props.name , 
            amount : amount , 
            price : props.price
        });
        cartcontx.addtocart({
            id : props.id , 
            name : props.name , 
            amount : amount , 
            price : props.price
        })
    }
    return(
        <div>
                <li className=" border-b border-b-gray-400 py-2 flex justify-between">
        <div> <h2 className=" text-2xl font-bold">{props.name}</h2> <p className=" italic">{props.description}</p> <p className="  text-red-900 font-bold">{props.price} $</p></div>
        <MealForm onAddToCart={onadd} ></MealForm>
        </li>
      

        </div>

        
    )
}