import React,{ useContext }  from "react";
import { Heading,Button,Wrap, position } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { MyContext } from "../Context";
import {Alert  } from 'react-bootstrap'
import { Container } from "semantic-ui-react";

export function Nav (){
  const context = useContext(MyContext);




  
   
    return( 

    
<div> 




<Alert variant="danger"  style={{ paddingTop: "10px" , textAlign:"center" }}>
  <Container fluid> 
    This is a demo project (zizopixels)
    </Container>
      </Alert>
  
  
  
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <Link to="/" className="nav-link">
          <Heading size="md">
            Room Reservation
             </Heading>
          </Link>

         
   

        </ul>
      </div>







<Link to="/rooms" className="nav-link">
 <Button colorScheme="teal">
     Rooms
  </Button>

</Link>


{context.isUserAuthenticated ? (
  <Link
    to="/"
    className="nav-link"
    role="button"
    onClick={context.logout}
  >
    <Button colorScheme="teal">
    Logout
    </Button>
  </Link>




) : (
  <>
      <Wrap spacing="20px">
    <Button colorScheme="teal">
      
    <Link to="/login" >
      Log in
      </Link>
      </Button>
    
     <Button colorScheme="teal" mr="4">
     <Link to="/register" >
           Sign Up
           </Link>
      </Button>
      </Wrap>
    
  </> 
)} 




{context.isAdmin && context.isUserAuthenticated ? (
  <Link to="/dashboard" className="nav-link">
    <Button colorScheme="teal">
    Dashboard
    </Button>
  </Link>


) : (


  ""
)}








     




    </nav>
    

    <div className="container">
      <div className="row justify-content-center pt-3">
      <p className="success-message font-weight-bold" id="common-message"></p>
      </div>
    </div>








</div>

    )


}
