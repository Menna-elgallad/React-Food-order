import { createContext } from "react";

const cartcontext = createContext({
    items :[] ,  
    totalAmount  : 0 , 
    addtocart  : (item=>{}) , 
    removeFromCart : (item =>{})
})

export default cartcontext