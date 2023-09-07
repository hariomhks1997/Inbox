import React from 'react';
import { Link } from 'react-router-dom';
import Inbox from './Inbox';

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
        <Link onClick={composehandler} ><h4>Compose</h4></Link>
          <Link onClick={inboxhandler}><h4>Inbox</h4></Link>
          <Link onClick={showsenthandler}><h4>SentMail</h4></Link>
          <h4>Unread</h4>
           
        </div>
    </div>
  )
}

export default Sidebar