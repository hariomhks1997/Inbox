import React from "react";
const CartContext=React.createContext({
    items:[],
    totalamount:0,
    additem:(item)=>{},
    removeitem:(id)=>{},
    token:'',
// isLoggedIn:false,
login:(token)=>{},
logout:()=>{}
})
export default CartContext;