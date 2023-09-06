import Forms from './components/Form';
import Notification from './ui/Notification';
import { useSelector } from 'react-redux';



const App = () => {
  const notification=useSelector((state)=>state.ui.notification)
  
  
 
  
 
  return (
    <div >
     {notification && <Notification status={notification.status} message={notification.message} title={notification.title}></Notification>}
     <Forms></Forms>
     
 
    </div>
  )
}

export default App