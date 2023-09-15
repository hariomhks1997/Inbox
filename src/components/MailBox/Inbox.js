import React,{useEffect,useContext} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Bluetickmail } from '../../store/sent-actions';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Deleteemail } from '../../store/sent-actions';
import Card from 'react-bootstrap/Card';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import CartContext from '../../store2/Cart-context';


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'grey' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}


const Inbox = (props) => {
  console.log(props)
 const refresh = useContext(CartContext)
 
  const dispatch=useDispatch();
  useEffect(() => {
    setTimeout(() => {
      refresh.additem(true)
    }, 1000);
     
     
      setTimeout(() => {
        refresh.additem(false)
      }, 2000);
     
    // eslint-disable-next-line
  }, [])
  
  
 
  
  if(props.sent==='sent' || props.sent==='undefined'){
    return;
  };
  
  const deletehandler=async()=>{
    const add={
      id:props.id,
      read:props.read
    }

    
      dispatch(Deleteemail(add))
    
   
  }
  
  const bluetickhandler=async ()=>{
  const add={
    id:props.id,
    date:props.date,
    text:props.text,
    subject:props.subject,
    email:props.email,
    sent:props.sent,
    read:'white',
    quantity:0

  }
  if(props.read==='white'){
    return;
  }
  
  
    dispatch(Bluetickmail(add))
  

 
  

  }
  

  
  return (
    <div  >
    
     <Accordion >
     <Card>
       <Card.Header style={{display:'flex',justifyContent:'space-between'}}>
       <CardHeader style={{background:`${props.read}`,width:'5px',height:'1px',marginTop:'1rem',borderRadius:'1rem',padding:'5px'}}></CardHeader>
         <CustomToggle eventKey="0" >Open me!</CustomToggle>
        
         <CardHeader style={{background:'pink',borderRadius:'8px',padding:'5px',}}>Subject:-{props.subject} </CardHeader> 
          <CardHeader style={{background:'pink',borderRadius:'8px',padding:'5px'}}>From:-{props.email}</CardHeader>
          <CardHeader style={{background:'pink',borderRadius:'8px',padding:'5px',}}>Date:-{props.date}</CardHeader> 
          <Button  onClick={deletehandler}>Delete</Button>
         
        
       </Card.Header>
       <Accordion.Collapse eventKey="0"  onMouseEnter={bluetickhandler}>
         <Card.Body>{props.text}</Card.Body>
       </Accordion.Collapse>
     </Card>
   
       
      
     
   </Accordion>
   
    </div>
  )
}

export default Inbox