import axios from "axios";
import { uiActions } from "./ui-slice";


export const Sentmail = (email,msg) => {
  console.log(email,msg)
 const email1=email.replace('.','').replace('@','')



    return async (dispatch) => {
      dispatch(
              uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending mail pending!',
              })
            );
      const sent = async () => {
       const response= await axios.post(
            `https://react-hariom-default-rtdb.firebaseio.com/${email1}.json`,msg);
     
      return response;
     
    }
  
      try {
        await sent();
       
        dispatch(
          uiActions.showNotification({
            status: 'sucess',
            title: 'sucess...',
            message: 'Send mail sucessfully',
          })
        );
      } catch (error) {
      
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: `Sending mail failed! ${error.response.data.error.message}`,
          })
        );
      }
    };
  };
  
  
  export const  SaveSentmail = (msg) => {
    const email=localStorage.getItem('emailtoken').replace('.','').replace('@','')
  
  
  
      return async (dispatch) => {
        dispatch(
                uiActions.showNotification({
                  status: 'pending',
                  title: 'Sending...',
                  message: 'Sending mail pending!',
                })
              );
        const sent = async () => {
         const response= await axios.post(
              `https://react-hariom-default-rtdb.firebaseio.com/${email}.json`,msg);
       
        return response;
       
      }
    
        try {
          await sent();
         
          dispatch(
            uiActions.showNotification({
              status: 'sucess',
              title: 'sucess...',
              message: 'Send mail sucessfully',
            })
          );
        } catch (error) {
        
          dispatch(
            uiActions.showNotification({
              status: 'error',
              title: 'Error!',
              message: `Sending mail failed! ${error.response.data.error.message}`,
            })
          );
        }
      };
    };
  
    
  
  
  
  