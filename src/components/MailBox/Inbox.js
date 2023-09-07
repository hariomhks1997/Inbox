import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const Inbox = (props) => {
  if(props.sent==='sent'){
    return;
  }
  return (
    <div  >
         <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        
         <CardHeader style={{background:'pink',borderRadius:'8px',padding:'5px'}}>Subject:-{props.subject} </CardHeader> 
          <CardHeader style={{background:'pink',marginLeft:'1rem',borderRadius:'8px',padding:'5px'}}>From:-{props.email}</CardHeader>
          <CardHeader style={{background:'pink',borderRadius:'8px',padding:'5px',marginLeft:'1rem'}}>Date:-{props.date}</CardHeader> 
          </Accordion.Header>
        <Accordion.Body>
         <CardHeader>{props.text}</CardHeader>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
  )
}

export default Inbox