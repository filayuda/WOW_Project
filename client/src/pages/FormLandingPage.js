import { Container, Card, Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonSignIn_SignUp from "./ButtonSignIn_SignUp";
import ButtonSignUp from "./ButtonSignUp";
import { useEffect } from "react";

import logo from '../images/landing-bg.png';
import WOW from '../images/WOW_Logo.png';
import { Link } from "react-router-dom";


const style = { 
    shadow : { 
        boxShadow: "1px 3px 1px #9E9E9E",
    }
}


function FormLandingPage() {

useEffect(()=> { 
    console.log('Landing page didmount')

    return ()=> { 
        console.log('Landing page will unmount')
    }
}, [] )

  return (
    <Container fluid>
            <img src={logo} className="float-end" alt="logo" style={{width:"75%", height:"650px",marginRight:"-15px" ,padding:"0px" }}/>
            <Card className="float-start" style={{border:"none", width: "40%", marginTop:"-45%"}}>
                <Card.Body>
                    <img src={WOW} className="img-fluid mx-auto d-block ps-2 mb-3" alt="logo" style={{ width:"80%", }}/>
                    <Card.Text className="p-1 mx-auto" style={{ width:"80%", fontSize:"16px" }}>
                    Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia
                    </Card.Text>
                    <div className="ps-5 mt-5 ">
                        <ButtonSignIn_SignUp />
                    </div>
                </Card.Body>
            </Card>
        
    </Container>
    
  );
}

export default FormLandingPage;