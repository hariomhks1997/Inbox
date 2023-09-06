import React,{useState} from 'react';
import { Forgetpassword } from '../store/cart-actions';
import { Form } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store/auth-slice';

const ForgetPassword = () => {
    const dispatch=useDispatch();
    const selector=useSelector(state=>state.auth.forget)
    const navigate=useNavigate()
    console.log(selector)
    if(selector===true){
        dispatch(authActions.forget(false))
   navigate('/login')
   
    }
    const [changepassword, setchangepassword] = useState('')
    
    const passwordhandler=(event)=>{
       setchangepassword(event.target.value)
       console.log(event.target.value)

    }
    const submithandler=(event)=>{
        event.preventDefault();
        dispatch(Forgetpassword(changepassword))
        console.log(changepassword)
    }

  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'20%'}}>
        <Form style={{width:'90%',maxWidth:'20rem',background:'violet',borderRadius:'1rem'}} onSubmit={submithandler}>
    <Form.Group style={{marginLeft:'1rem',marginRight:'1rem'}} className="mb-3" controlId="formBasicPassword">
        <Form.Label  >Enter The Email To Forget The Password</Form.Label>
        <Form.Control onChange={passwordhandler} type="email" placeholder="email" />
      </Form.Group>
      <Button style={{fontSize:'12px',marginBottom:'1rem',marginLeft:'1rem'}} type='submit' >Send Link</Button>
      </Form>
    
    </div>
  )
}

export default ForgetPassword