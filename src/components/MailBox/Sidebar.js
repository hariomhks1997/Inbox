import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {

  let quantity=0;
  props.bluequantity.map((item)=>(
  quantity=item.quantity+quantity
  ))

  
 
  
  
  
 
  const inboxhandler=()=>{
   props.inbox()
  }
  const showsenthandler=()=>{
    props.sent()
  }
  const composehandler=()=>{
    props.compose()
  }
  const unreadhandler=()=>{
    props.unread()
  }
  return (
    <div>
        <div style={{backgroundColor:'lightblue',padding:'1rem',borderRadius:'1rem',height:'100%'}}>
        <NavLink onClick={composehandler} style={{backgroundColor:'pink',textDecoration:'none'}}><h4>Compose</h4></NavLink>
          <NavLink style={{backgroundColor:'pink',textDecoration:'none'}} onClick={inboxhandler}><h4 >Inbox</h4></NavLink>
          <NavLink onClick={showsenthandler} style={{backgroundColor:'pink',textDecoration:'none'}}><h4>SentMail</h4></NavLink>
          <NavLink onClick={unreadhandler} style={{backgroundColor:'pink',textDecoration:'none'}}><div style={{display:'flex',justifyContent:'space-around'}}><h4>Unread </h4><h6>{quantity}</h6></div></NavLink>
       
           
        </div>
    </div>
  )
}

export default Sidebar