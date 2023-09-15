import { useEffect } from "react";
import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/Login";
import Navbars from "./components/Navbars";
import Notification from "./ui/Notification";
import { useSelector } from "react-redux";
import { Routes,Route } from 'react-router-dom';
import InboxMail from "./components/MailBox/InboxMail";
import { GetSaveSentmail ,intervalSaveSentmail} from "./store/sent-actions";
import { useDispatch } from 'react-redux';
import { verifyemail } from "./store/cart-actions";
import { idget } from "./store/id-actions";



let initial=true;
const App = () => {
  
  
  const notification = useSelector((state) => state.ui.notification);
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  const change=useSelector(state=>state.cart.changed);
  
  const dispatch=useDispatch();
 
  useEffect(() => {
    if(initial && isLoggedIn){
      initial=false;

      
      
      dispatch(GetSaveSentmail())
     
    }
   
   
    
   // eslint-disable-next-line
  }, [isLoggedIn,dispatch])
  
  useEffect(() => {
    if(!isLoggedIn){
  return;
    }
    if(!change){
      return;
    }
    
    dispatch(GetSaveSentmail())
    // eslint-disable-next-line
  }, [isLoggedIn,dispatch])

  const email=localStorage.getItem('emailtoken')
  useEffect(() => {
    
  
  setInterval(() => {
   if(isLoggedIn){
    dispatch(intervalSaveSentmail())
   
   }
      
    
    }, 2000);
   
    // eslint-disable-next-line
  }, [email])
  
  useEffect(() => {
   const time1= setInterval(() => {
      if(isLoggedIn){
        dispatch(verifyemail())
        
      }
     
    }, 120000);
    return ()=>{
      clearInterval(time1)
    }
   // eslint-disable-next-line
  }, [isLoggedIn])
 
  useEffect(() => {
    
   const time= setInterval(() => {
      if(isLoggedIn){
        console.log(isLoggedIn)
        dispatch(idget())
      }
      
     
    }, 10000);
    return ()=>{
      clearInterval(time)
    }
  }, [isLoggedIn])
  
  
 
  // useEffect(() => {
  //   localStorage.setItem('emailtoken','1')
  // }, [])
  
  
 
  return (
    <div>
     
      <Navbars ></Navbars>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        ></Notification>
      )}
    
     
      <Routes>
   
   
   
    
  
    
    <Route exact path='/login' element={!isLoggedIn ?<Login></Login>:<InboxMail></InboxMail>}></Route>
    <Route exact path='/forget' element={<ForgetPassword ></ForgetPassword>}></Route>
    <Route exact path='/mailbox' element={isLoggedIn && <InboxMail></InboxMail>}></Route>
    
 
    
      
      
    </Routes>
    
     
    </div>
  );
};

export default App;
