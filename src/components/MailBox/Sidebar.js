import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = (props) => {
  const inboxhandler=()=>{
   props.inbox()
  }
  const showsenthandler=()=>{
    props.sent()
  }
  const composehandler=()=>{
    props.compose()
  }
  return (
    <div>
        <div style={{backgroundColor:'lightblue',padding:'1rem',borderRadius:'1rem',height:'100%'}}>
        <NavLink onClick={composehandler} style={{backgroundColor:'pink',textDecoration:'none'}}><h4>Compose</h4></NavLink>
          <NavLink style={{backgroundColor:'pink',textDecoration:'none'}} onClick={inboxhandler}><h4 >Inbox</h4></NavLink>
          <NavLink onClick={showsenthandler} style={{backgroundColor:'pink',textDecoration:'none'}}><h4>SentMail</h4></NavLink>
       
           
        </div>
    </div>
  )
}

export default Sidebar