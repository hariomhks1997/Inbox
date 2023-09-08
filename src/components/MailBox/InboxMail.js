import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import Sent from './Sent';
import Sidebar from './Sidebar';
import Inbox from './Inbox';
import ShowSentMails from './ShowSentMails';
import { useSelector } from 'react-redux';


const InboxMail = () => {
 const sentitem=useSelector(state=>state.cart.items)
 
  const [inbox, setinbox] = useState(false)
  const [sent, setsent] = useState(false)
  const [compose, setcompose] = useState(true)
  const [overflow, setoverflow] = useState(false)
  const showinbox=()=>{
    setcompose(false)
    setsent(false)
    setinbox(true)
    setoverflow(true)
  }
  const sentbox=()=>{
    setcompose(false)
    setinbox(false)
    setsent(true)
    setoverflow(true)
  }
  const showcompose=()=>{
    setsent(false)
    setinbox(false)
    setcompose(true)
    setoverflow(false)
  }
  
 const showproduct=sentitem.map((item)=>(
 <ShowSentMails key={item.id} text={item.text} date={item.date} email={item.email} subject={item.subject} sent={item.sent} id={item.id} read={item.read}></ShowSentMails>
 ))

 const showinbo=sentitem.map((item)=>(
  <Inbox key={item.id} text={item.text} date={item.date} email={item.email} subject={item.subject} sent={item.sent}  id={item.id} read={item.read} ></Inbox>
  ))
  

  return (
    
         <Container style={{marginTop:'5rem',}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
     
      <Sidebar inbox={showinbox} sent={sentbox} compose={showcompose} bluequantity={sentitem}></Sidebar>
      {compose && <Sent></Sent>}
      {overflow && <div style={{width:'100%',height:'30rem',overflow:'scroll'}}>
     {sent && showproduct}
     {inbox && showinbo }
     </div>}
      
      </div>
    </Container>
    
    
  )
}

export default InboxMail