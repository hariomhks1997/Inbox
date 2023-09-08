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
  console.log(email)
  useEffect(() => {
    
    if(email===null){
     
      return;
    }
  setInterval(() => {
    if(email===null){
     
      return;
    }
      dispatch(intervalSaveSentmail())
    
    }, 2000);
   
    // eslint-disable-next-line
  }, [email])
  
 
  // setTimeout(function () {
  //   window.location.reload()
  // }, 2000);
  
 
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
