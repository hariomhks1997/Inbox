import React,{useEffect,useContext} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CardHeader from 'react-bootstrap/esm/CardHeader';
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

let initial=true;
const ShowSentMails = (props) => {
  const refresh = useContext(CartContext)
  const dispatch=useDispatch();
  useEffect(() => {
    console.log(initial)
    setTimeout(() => {
      refresh.additem(true)
    }, 1000);
     
     
      setTimeout(() => {
        refresh.additem(false)
      }, 2000);
     
    
  // eslint-disable-next-line 
  }, [initial])
 
  if(props.sent==='receive' || props.sent==='undefined'){
    return;
  }
  
  const deletehandler=async()=>{
    const add={
      id:props.id
    }
  
    initial=!initial
    console.log(initial)
  
   
      dispatch(Deleteemail(add))
      console.log(initial)
   
  }
  
  return (
    <div  >
         <Accordion >
     <Card>
       <Card.Header style={{display:'flex',justifyContent:'space-between'}}>
    
         <CustomToggle eventKey="0" >Open me!</CustomToggle>
        
         <CardHeader style={{background:'pink',borderRadius:'8px',padding:'5px',}}>Subject:-{props.subject} </CardHeader> 
          <CardHeader style={{background:'pink',borderRadius:'8px',padding:'5px'}}>To:-{props.email}</CardHeader>
          <CardHeader style={{background:'pink',borderRadius:'8px',padding:'5px',}}>Date:-{props.date}</CardHeader> 
          <Button  onClick={deletehandler}>Delete</Button>
         
        
       </Card.Header>
       <Accordion.Collapse eventKey="0"  >
         <Card.Body>{props.text}</Card.Body>
       </Accordion.Collapse>
     </Card>
   
       
      
     
   </Accordion>
   
    </div>
  )
}

export default ShowSentMails