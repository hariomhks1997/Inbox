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
            console.log(action.payload)
      localStorage.setItem('token',action.payload)
       const token=localStorage.getItem('token')
       const userIsLoggedIn=!!token
       console.log(userIsLoggedIn)
            
                state.isLoggedIn=userIsLoggedIn;
                state.token=token;

             

        },
        emaillogin(state,action){
            //const email=action.payload.replace('.','').replace('@','');
            localStorage.setItem('emailtoken',action.payload)
        },
        logout(state){
            localStorage.removeItem('token')
            
            state.isLoggedIn=false
        },
        forget(state,action){
           state.forget=action.payload
        }
    }

})


export const authActions=authslice.actions; 
export default authslice