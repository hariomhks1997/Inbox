import React from 'react';
import { Button, } from 'react-bootstrap';
//import { Editor } from "react-draft-wysiwyg";
//import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useRef } from 'react';

import { Sentmail,SaveSentmail} from '../../store/sent-actions';
import { useDispatch } from 'react-redux';

const Sent = () => {
    const dispatch=useDispatch();
 
    const emailref=useRef();
    const textarearef=useRef();
    const subjectref=useRef();
    
    
    const submithandler=(event)=>{
  event.preventDefault();
  const email1=emailref.current.value;
  const email2=localStorage.getItem('emailtoken');
  
  const add1={
    email:email2,
  text:textarearef.current.value,
  subject:subjectref.current.value,
  date:new Date().toLocaleString(),
  sent:'receive',
  read:'blue',
  quantity:1
  }
  
  
  const add2={
    email:email1,
    text:textarearef.current.value,
    subject:subjectref.current.value,
    sent:'sent',
    date:new Date().toLocaleString(),
    quantity:0
  
    }
  dispatch(Sentmail(email1,add1))
  dispatch(SaveSentmail(add2))

    }
    
  
  return (
    
       
        
       
    
      <form onSubmit={submithandler} style={{marginLeft:'1rem',width:'100%'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
    <label>To</label>
    <input type='email'style={{border:'white',width:'100%',marginLeft:'1%',marginRight:'1%'}} ref={emailref}></input>
    <label>CC/BCC</label>
    </div>
    <hr></hr>
    <input type='text'style={{border:'white',width:'100%'}} ref={subjectref} placeholder='Subject'></input>
    <hr></hr>
    <textarea style={{width:'100%',height:'15rem',border:'white'}} ref={textarearef} placeholder='This Is A test mail'></textarea>
    <hr></hr>
    <Button type='submit' >Send</Button>
    <hr></hr>
    {/* <Editor
    
editorClassName="editorClassName"
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  

/>; */}

</form>

    
  )
}

export default Sent