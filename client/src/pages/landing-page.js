import { Container, Card, Image, Form, Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonSignIn_SignUp from "./ButtonSignIn_SignUp";
import { useState } from "react";
import React from "react";
import ButtonSignUp from "./ButtonSignUp";
import { NavLink } from 'react-router-dom';
import FormSignUp from "./FormSignUp";
import FormSignIn from "./FormSignIn";

import logo from '../images/landing-bg.png';
import WOW from '../images/WOW_Logo.png';
import { Link } from "react-router-dom";


function LandingPage() {
    const [isModal, setModal] = useState(false)

    const [signUpShow, setSignUpShow] = useState(false);
    const [signInShow, setSignInShow] = useState(false);
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
                        <Button className="px-5 me-3" variant="danger" onClick={() => setSignInShow(true)}>Sign In</Button>
                        <FormSignIn show={signInShow} onHide={() => setSignInShow(false)}/>
                       
                        <Button className="px-5 me-3" variant="secondary" onClick={() => setSignUpShow(true)}>Sign Up</Button>
                        <FormSignUp show={signUpShow} onHide={() => setSignUpShow(false)}/>
                        
                    </div>
                </Card.Body>
            </Card>

    </Container>
    
  );
}

export default LandingPage;
