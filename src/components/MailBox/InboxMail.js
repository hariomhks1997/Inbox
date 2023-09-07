import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import Sent from './Sent';
import Sidebar from './Sidebar';
import Inbox from './Inbox';
import ShowSentMails from './ShowSentMails';


const InboxMail = () => {
  const [inbox, setinbox] = useState(false)
  const [sent, setsent] = useState(false)
  const [compose, setcompose] = useState(false)
  const showinbox=()=>{
    setcompose(false)
    setsent(false)
    setinbox(true)
  }
  const sentbox=()=>{
    setcompose(false)
    setinbox(false)
    setsent(true)
  }
  const showcompose=()=>{
    setsent(false)
    setinbox(false)
    setcompose(true)
  }
  
   
  

  return (
    
         <Container style={{marginTop:'10rem',}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <Sidebar inbox={showinbox} sent={sentbox} compose={showcompose}></Sidebar>
      {compose && <Sent></Sent>}
      {sent && <ShowSentMails></ShowSentMails>}
     {inbox && <Inbox></Inbox> }
      
      </div>
    </Container>
    
    
  )
}

export default InboxMail