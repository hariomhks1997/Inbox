import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/Login";
import Navbars from "./components/Navbars";
import Notification from "./ui/Notification";
import { useSelector } from "react-redux";
import { Routes,Route } from 'react-router-dom';
import InboxMail from "./components/MailBox/InboxMail";

const App = () => {
  const notification = useSelector((state) => state.ui.notification);
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  
 
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
