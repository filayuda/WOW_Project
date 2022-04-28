import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal' ;
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 


import 'bootstrap/dist/css/bootstrap.min.css'
import FormSignIn from "./FormSignIn";
import FormSignUp from "./FormSignUp";
import HomePage from "./HomePage";


function ButtonSignIn_SignUp(props) {
    const [signInShow, setSignInShow] = useState(false);
    const [signUpShow, setSignUpShow] = useState(false);

    // const [state, setState] = useState({
    //     isLogin: false,
    //     user: {
    //         email: '',
    //         password: ''
    //     }, 
    // })


    // const handleOnSubmit = (e) => {
    //     e.preventDefault()

    //     const email = document.getElementById('email').value
    //     const password = document.getElementById('password').value
    //     setState({
    //         isLogin: true,
    //         user: { 
    //             email,
    //             password
    //         }
    //     })
    // }

    return (
      <>
        <Button className="px-5 me-3" variant="danger" onClick={() => setSignInShow(true)}>Sign In</Button>{' '}
        <Button className="px-5 me-3" variant="secondary" onClick={() => setSignUpShow(true)}>Sign Up</Button>
       
        <FormSignIn show={signInShow} onHide={() => setSignInShow(false)}/>
        <FormSignUp show={signUpShow} onHide={() => setSignUpShow(false)}/>



        {/* {state.isLogin ? <HomePage /> : (
        
            <Modal show={signInShow} onHide={ () => setSignInShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter" className="fw-bold">
                    Sign in
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                            <Form onSubmit={handleOnSubmit} className="d-grid gap-2">
                                <Form.Control className="mb-3" type="email" placeholder="Enter email" name="email" id="email"/>
                                <Form.Control className="mb-3" type="password" placeholder="Enter password" name="password" id="password"/>
                                <Button variant="danger" type="submit" className=""> Sign In </Button>
                                <p style={{ textAlign:"center" }}>Don't have an account ? Klik <button className="btn btn-link fw-bold" style={{ textDecoration:"none", marginTop:"-6px", padding:"0px", color:"black" }}> Here </button></p>
                            </Form>
                </Modal.Body>
            </Modal>
        )}

        <Modal show={signUpShow} onHide={ () => setSignUpShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className="fw-bold">
                Sign Up
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Form className="d-grid gap-2">
                        <Form.Control className="mb-3" type="email" placeholder="Enter email" />
                        <Form.Control className="mb-3" type="password" placeholder="Enter password" />
                        <Form.Control className="mb-3" type="text" placeholder="Full Name" />
                        <Button variant="danger" type="submit" className=""> Sign Up </Button>
                        <p style={{ textAlign:"center" }}>Already have an account ? Klik <button className="btn btn-link fw-bold" style={{ textDecoration:"none", marginTop:"-6px", padding:"0px", color:"black" }}> Here </button></p>
                    </Form>
            </Modal.Body>
        </Modal> */}

      </>
    );
}


export default ButtonSignIn_SignUp