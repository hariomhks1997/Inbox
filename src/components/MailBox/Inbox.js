import React  from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Bluetickmail } from '../../store/sent-actions';
import { useDispatch } from 'react-redux';



const Inbox = (props) => {
  console.log(props)
 
  const dispatch=useDispatch();
  if(props.sent==='sent'){
    return;
  };
  
  const bluetickhandler=()=>{
  const add={
    id:props.id,
    date:props.date,
    text:props.text,
    subject:props.subject,
    email:props.email,
    sent:props.sent,
    read:'white'

  }

  dispatch(Bluetickmail(add))
  

  }
   
  
  return (
    <div  >
         <Accordion >
      <Accordion.Item eventKey="0" onClick={bluetickhandler}>
        <Accordion.Header>
       <CardHeader style={{background:`${props.read}`,padding:'8px'}}></CardHeader>
         <CardHeader style={{background:'pink',borderRadius:'8px',padding:'5px',marginLeft:'1rem'}}>Subject:-{props.subject} </CardHeader> 
          <CardHeader style={{background:'pink',marginLeft:'1rem',borderRadius:'8px',padding:'5px'}}>From:-{props.email}</CardHeader>
          <CardHeader style={{background:'pink',borderRadius:'8px',padding:'5px',marginLeft:'1rem'}}>Date:-{props.date}</CardHeader> 
          </Accordion.Header>
        <Accordion.Body >
         <CardHeader>{props.text}</CardHeader>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
  )
}

export default Inbox