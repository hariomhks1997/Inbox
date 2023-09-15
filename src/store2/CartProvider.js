import React, { useState ,useEffect} from "react";
import CartContext from "./Cart-context";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { cartActions } from "../store/cart-slice";







const CartProvider = (props) => {
    const dispatch=useDispatch();
    
  const [additem, setadditem] = useState(false)
 

    
  
  useEffect(() => {
   
     
       
           
    const time= setTimeout(() => {
       
        dispatch(authActions.logout())
        dispatch(cartActions.addarray([]))
   
    },700000);

return ()=>{
    clearTimeout(time)
    
}

  // eslint-disable-next-line
  }, [additem]);
  
  
  
  
 
  
  
  
 
  

 
    
  
  
   
    

    
  
  

  const additemhandler =(item1) => {
   setadditem(item1)

  }
    
  const removeitemhandler = async (item) => {
    console.log(item)
    setadditem(item)
  };
  

  const cartContext = {
    
    additem: additemhandler,
    removeitem: removeitemhandler,
  
    
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
      
    </CartContext.Provider>
  );
};

export default CartProvider;