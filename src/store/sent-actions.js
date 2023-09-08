import axios from "axios";
import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";


export const Sentmail = (email,msg) => {

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
    const email=localStorage.getItem('emailtoken').replace('.','').replace('@','');




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
       const add={
        id:response.data.name,
        ...msg
       }
    return add;
      }

        try {
          const data=await sent();
         dispatch(cartActions.sentItemToCart(data))
          dispatch(
            uiActions.showNotification({
              status: 'sucess',
              title: 'sucess...',
              message: 'Send mail sucessfully',
            })
          );
        } catch (error) {
        console.log(error)
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

    export const  GetSaveSentmail = () => {
      const email=localStorage.getItem('emailtoken').replace('.','').replace('@','')
      console.log(email)


        return async (dispatch) => {
          dispatch(
                  uiActions.showNotification({
                    status: 'pending',
                    title: 'Getting...',
                    message: 'Getting mail pending!',
                  })
                );
          const sentget = async () => {
           const response= await axios.get(
                `https://react-hariom-default-rtdb.firebaseio.com/${email}.json`);
                const data=await response.data;
               return data;
        }

          try {
            const dat=await sentget();


            if(dat==='undefined'){

              

            }else{
              for(const key in dat){
                const add={
                  id:key,
                  date:dat[key].date,
                  text:dat[key].text,
                  subject:dat[key].subject,
                  email:dat[key].email,
                  sent:dat[key].sent,
                  read:dat[key].read

                }

                dispatch(cartActions.sentItemToCart(add))
                 
              }

            }
            dispatch(
              uiActions.showNotification({
                status: 'sucess',
                title: 'sucess...',
                message: 'Getting mail sucessfully',
              })
            );

          } catch (error) {
          console.log(error)
            dispatch(
              uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: `Getting mail failed! ${error.response.data.error.message}`,
              })
            );
          }
        };
      };

      export const Deleteemail = (item) => {
        console.log(item.id)

        const email1=localStorage.getItem('emailtoken').replace('.','').replace('@','');



           return async (dispatch) => {
             dispatch(
                     uiActions.showNotification({
                       status: 'pending',
                       title: 'Deleting...',
                       message: 'Deleting mail pending!',
                     })
                   );
             const Delete = async () => {
              const response= await axios.delete(
                   `https://react-hariom-default-rtdb.firebaseio.com/${email1}/${item.id}.json`);
            const data=await response.data;
             return data;

           }

             try {
             const data=await Delete();
             console.log(data)
              console.log('delete')
              dispatch(cartActions.removesentItemFromCart(item))
               dispatch(
                 uiActions.showNotification({
                   status: 'sucess',
                   title: 'sucess...',
                   message: 'Delete data sucessfully',
                 })
               );
             } catch (error) {

               dispatch(
                 uiActions.showNotification({
                   status: 'error',
                   title: 'Error!',
                   message: `Delete data failed! ${error.response.data.error.message}`,
                 })
               );
             }
           };
         };




      export const Bluetickmail = (item) => {

        const email1=localStorage.getItem('emailtoken').replace('.','').replace('@','');



           return async (dispatch) => {
             dispatch(
                     uiActions.showNotification({
                       status: 'pending',
                       title: 'Blue tick...',
                       message: 'Blue Tick removing pending!',
                     })
                   );
             const blue = async () => {
              const response= await axios.put(
                   `https://react-hariom-default-rtdb.firebaseio.com/${email1}/${item.id}.json`,item);

             return response;

           }

             try {
               await blue();
              console.log('update')
               dispatch(
                 uiActions.showNotification({
                   status: 'sucess',
                   title: 'sucess...',
                   message: 'Blue Tick removed sucessfully',
                 })
               );
             } catch (error) {

               dispatch(
                 uiActions.showNotification({
                   status: 'error',
                   title: 'Error!',
                   message: `Blue tick removal failed! ${error.response.data.error.message}`,
                 })
               );
             }
           };
         };



