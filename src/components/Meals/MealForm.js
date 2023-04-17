import { useState } from "react"

const MealForm = (props) => { 
    const [stateInput , setNumber] = useState(1) ; 
    const handleNumChange =(event)=>{
        setNumber(event.target.value)
    }
    const submitamount = ()=>{
        const amountItem =  stateInput 
        console.log(amountItem)
        props.onAddToCart(+amountItem)
    }
    return(
        <div>
        <div>
          <label htmlFor="amount" className=" font-bold mr-2">Amount </label>
          <input type="number" id="amount" defaultValue={1} className=" w-7" onChange={handleNumChange}></input>

        </div>
           <button class="bg-red-900 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-2xl mt-3" onClick={submitamount}>
                + Add
                </button>
                        </div>
    )
}
export default MealForm ; 