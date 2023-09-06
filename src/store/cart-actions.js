
import axios from 'axios';
import { uiActions } from './ui-slice';


export const Signup = (email1,password1) => {

console.log(email1,password1)

    return async (dispatch) => {
      dispatch(
              uiActions.showNotification({
                status: 'pending',
                title: 'SignUpIn...',
                message: 'SignUp data pending!',
              })
            );
      const signup = async () => {
        const response=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4',{
          email:email1,
          password:password1,
          returnSecureToken:true

      })
     
      return response;
     
    }
  
      try {
        await signup();
       
        dispatch(
          uiActions.showNotification({
            status: 'sucess',
            title: 'sucess...',
            message: 'SignUp data sucessfully',
          })
        );
      } catch (error) {
      
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: `SignUp data failed! ${error.response.data.error.message}`,
          })
        );
      }
    };
  };



  export const SignIn = (email1,password1) => {

    console.log(email1,password1)
    
        return async (dispatch) => {
          dispatch(
                  uiActions.showNotification({
                    status: 'pending',
                    title: 'Logging...',
                    message: 'Logging data pending!',
                  })
                );
          const signin = async () => {
          const response=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4',{
              email:email1,
              password:password1,
              returnSecureToken:true
    
          })
         
          return response;
         
        }
      
          try {
          await signin();
            
            dispatch(
              uiActions.showNotification({
                status: 'sucess',
                title: 'sucess...',
                message: 'Logging data sucessfully',
              })
            );
          } catch (error) {
          
            dispatch(
              uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: `Logging data failed! ${error.response.data.error.message}`,
              })
            );
          }
        };
      };
    