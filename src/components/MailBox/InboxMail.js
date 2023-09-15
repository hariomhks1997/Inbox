import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import Sent from './Sent';
import Sidebar from './Sidebar';
import Inbox from './Inbox';
import ShowSentMails from './ShowSentMails';
import { useSelector } from 'react-redux';
import Unread from './Unread';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Card } from 'react-bootstrap';


const InboxMail = () => {
 const sentitem=useSelector(state=>state.cart.items)
 console.log(sentitem)
 
  const [inbox, setinbox] = useState(true)
  const [sent, setsent] = useState(false)
  const [compose, setcompose] = useState(false)
  const [overflow, setoverflow] = useState(true)
  const [unread, setunread] = useState(false)
  const showinbox=()=>{
    setcompose(false)
    setsent(false)
    setinbox(true)
    setoverflow(true)
    setunread(false)
  }
  const sentbox=()=>{
    setcompose(false)
    setinbox(false)
    setsent(true)
    setoverflow(true)
    setunread(false)
  }
  const showcompose=()=>{
    setsent(false)
    setinbox(false)
    setcompose(true)
    setoverflow(false)
    setunread(false)
  }
  const showunread=()=>{
    setunread(true)
    setcompose(false)
    setinbox(false)
    setoverflow(true)
    setsent(false)
  }
  
 const showproduct=sentitem.map((item)=>(
 <ShowSentMails key={item.id} text={item.text} date={item.date} email={item.email} subject={item.subject} sent={item.sent} id={item.id} read={item.read}  ></ShowSentMails>
 ))

 const showinbo=sentitem.map((item,index)=>(
  <Inbox key={item.id} text={item.text} date={item.date} email={item.email} subject={item.subject} sent={item.sent}  id={item.id} read={item.read} ></Inbox>
  ))
  const showunrea=sentitem.map((item)=>(
    <Unread key={item.id} text={item.text} date={item.date} email={item.email} subject={item.subject} sent={item.sent}  id={item.id} read={item.read} ></Unread>
    ))
  
    let quantity=0;
    sentitem.map((item)=>(
    quantity=quantity+item.quantity
    ))

  return (
    
         <Container style={{marginTop:'2rem',}}>
          <div style={{textAlign:'center',display:'flex',justifyContent:'center',marginBottom:'1rem'}}>
          {compose && <CardHeader style={{textAlign:'center',fontSize:'2rem',background:'grey',padding:'0.50rem',borderRadius:'1rem'}}>Compose</CardHeader>}
         { inbox && <CardHeader style={{textAlign:'center',fontSize:'2rem',background:'grey',padding:'0.50rem',borderRadius:'1rem'}}>Inbox</CardHeader>}
         { sent && <CardHeader style={{textAlign:'center',fontSize:'2rem',background:'grey',padding:'0.50rem',borderRadius:'1rem'}}>Sent Mail</CardHeader>}
         { unread && <CardHeader style={{textAlign:'center',fontSize:'2rem',background:'grey',padding:'0.50rem',borderRadius:'1rem'}}>Unread {quantity}</CardHeader>}
           </div>
      <div style={{display:'flex',justifyContent:'space-between'}}>
     
      <Sidebar inbox={showinbox} sent={sentbox} compose={showcompose} unread={showunread} bluequantity={sentitem}></Sidebar>
      {compose && <Sent></Sent>}
      {overflow && <Card style={{width:'100%',height:'30rem',overflow:'scroll'}}>
       
     {sent && showproduct}
     {inbox && showinbo }
     {unread &&  showunrea}
     </Card>}
      
      </div>
    </Container>
    
    
  )
}

export default InboxMail