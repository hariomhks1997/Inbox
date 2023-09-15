import React from 'react';
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';
 import classes from './Navbars.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authActions } from '../store/auth-slice';
import { cartActions } from '../store/cart-slice';
import { uiActions } from '../store/ui-slice';


const Navbars = () => {
 

  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  const dispatch=useDispatch();
 
  const logouthandler=()=>{
   window.location.reload(dispatch(authActions.logout()))
   dispatch(authActions.logout())
  
   dispatch(cartActions.addarray([]))
   
   dispatch(
    uiActions.showNotification({
      status: 'sucess',
      title: 'sucess...',
      message: 'Logout mail sucessfully',
    })
  );

  
   
  }
  return (
    <div className={classes.nav} >
      
     <Navbar expand='lg' className="bg-body-tertiary">
       <Container>
         <Navbar.Brand href="#home">Inbox Mail</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link><NavLink  to="/home">Home</NavLink></Nav.Link>
             <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
             {isLoggedIn && <Nav.Link><NavLink to="/mailbox">Inbox Mail</NavLink></Nav.Link>}
             {!isLoggedIn &&  <Nav.Link><NavLink to="/login">Login</NavLink></Nav.Link>}
             {isLoggedIn && <Nav.Link><NavLink onClick={logouthandler} to="/login">Logout</NavLink></Nav.Link>}
             <Nav.Link style={{display:'none'}}><NavLink  to="/forget">Forget</NavLink></Nav.Link>
             <NavLink style={{display:'none'}} to="/verifyemail">Email Verification</NavLink>
             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2">
                 Another action
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
         <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">
                 Separated link
             </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars