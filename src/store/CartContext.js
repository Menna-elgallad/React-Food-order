import { createContext } from "react";
import { useReducer } from "react";
import Cartcontext from "./myCartContext";

const defaultCart = {
    items : [] , 
    totalAmount : 0 , 
}
const reducerFunc = ((state , action)=>{
   

    if (action.type === 'add'){
        const itemindex  = state.items.findIndex((item)=>{
            return item.id === action.item.id 
        })
        const existingitem = state.items[itemindex]
        let updateItem   ; 
        let updatedstate ;
    if (existingitem){
        updateItem  = {...existingitem , amount : action.item.amount + existingitem.amount }
       updatedstate = [...state.items ]
       updatedstate[itemindex] = updateItem
       console.log(updatedstate)
    }
    else{

        updatedstate = state.items.concat(action.item)
    }
    const updatedTotal = state.totalAmount + (action.item.price * action.item.amount)
    return { 
        items : updatedstate , 
        totalAmount : updatedTotal , 
    }
   }
   if (action.type ==='remove'){
    let updatedstate ; 
    console.log(action.id)
    const existedindex = state.items.findIndex(item => item.id === action.id)
    const existeditem = state.items[existedindex]
    console.log("existeditem" , existeditem)
    if (existeditem.amount === 1){
        updatedstate = state.items.filter(item => item.id !== action.id)
    }
    else{
      const updateditem = {...existeditem , amount : existeditem.amount -1 }
        updatedstate = [...state.items  ]
        updatedstate[existedindex] = updateditem
    }
    const  updatedTotal = state.totalAmount - existeditem.price ; 
    return { 
        items : updatedstate , 
        totalAmount : updatedTotal , 
    }
   }

})



const Cartprovioder = (props)=>{
    const [cartState, setCart ] = useReducer(reducerFunc , defaultCart)
    const  addToCart =  (item)=>{
        setCart({type : "add" , item : item})
    }
    const  removeFromCart =  (id)=>{
        setCart({type : "remove" , id : id})

    }

    const cartprovide = {
        items :cartState.items ,  
    totalAmount  : cartState.totalAmount, 
    addtocart  : addToCart, 
    removeFromCart : removeFromCart
    }
    return(<Cartcontext.Provider value={cartprovide}>
        {props.children}
    </Cartcontext.Provider>)
}

export default Cartprovioder