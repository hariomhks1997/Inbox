import { createSlice } from "@reduxjs/toolkit";

const token=localStorage.getItem('token')
const userIsLoggedIn=!!token
const initialauthstate={
    
    isLoggedIn:userIsLoggedIn,
    token:token,
    forget:false
};
const authslice=createSlice({
    name:'authentician',
    initialState:initialauthstate,
    reducers:{
      
        login(state,action){
          
      localStorage.setItem('token',action.payload)
       const token=localStorage.getItem('token')
       const userIsLoggedIn=!!token
       
            
                state.isLoggedIn=userIsLoggedIn;
                state.token=token;

             

        },
        emaillogin(state,action){
            //const email=action.payload.replace('.','').replace('@','');
            localStorage.setItem('emailtoken',action.payload)
        },
        logout(state){
            window.location.reload()
            localStorage.removeItem('token')
            localStorage.removeItem('emailtoken')
            localStorage.setItem('emailtoken','1')
            
            state.isLoggedIn=false
        },
        forget(state,action){
           state.forget=action.payload
        }
    }

})


export const authActions=authslice.actions; 
export default authslice