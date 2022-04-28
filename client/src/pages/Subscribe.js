import { Nav, Col,Container, Card, Image, Button, Form, Row, Modal } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCoffee, faList, faRightFromBracket, faRoad } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import Navbar from './Navbar'
import HomePage from "./HomePage";
import ReadBookFirst from "./ReadBookFirst";
import {API} from '../config/api'


import WowLogo from '../images/WOWlogo-01.png'
import WOW from '../images/WOW_Logo.png';
import profile from '../images/profile.png';
import mading from '../images/frame-1.png'
import listBook from '../fakeData/ListBook'
import road from '../images/road.png'



const element =  { 
    cofee: <FontAwesomeIcon icon={faCoffee} />, 
    user : <FontAwesomeIcon icon={faUser} />,  
    list : <FontAwesomeIcon icon={faList} />,  
    logout : <FontAwesomeIcon icon={faRightFromBracket} />, 
 
 }

export default function Subscribe(){
    const [show, setShow] = useState(false)
    const [state, setState] = useState(false)

    const [subscribe, setSubscribe] = useState({ 
        isLogin : false,
        name : 'Not Subscribed Yet',
        link : ''
    })

    const handleChange = ()=> { 
        setSubscribe({ 
            isLogin : true,
            name : 'Subscribed', 
            link : '/home-page',
        })
        setShow(false)
    }

    let navigate = useNavigate() ; 

    const [form, setForm] = useState({ 
        transferProof : "", 
    });

    const {transferProof} = form; 

    const handleOnChange = (e)=> { 
        setForm({ 
            ...form, 
            [e.target.name] : e.target.type === "file" ? e.target.files : e.target.value,
        });
        
    };

    const handleOnSubmit = async (e) => { 
        try {
            e.preventDefault(); 

            const config= { 
                headers : {
                    "Content-type" : "multipart/form-data",
                }
            }

            const formData = new FormData(); 
            formData.set("transferProof", form.transferProof[0], form.transferProof[0].name); 
            
            console.log(form)
            console.log(formData)

            const response = await API.post("/addTransaction", formData, config); 
            console.log(response)

            // setShow(true)
            navigate('/home-page');


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Nav expand="lg">
                
                {/* <Navbar subscribe="Not Subscribed Yet"/> */}
                <Navbar {...subscribe} />

                <div className="col-9 p-4 ">
                        <Container className="text-center p-5 mt-5">
                            <h2>Premium</h2>
                            <p>Pay now and access all the latest books from <img src={WowLogo} style={{ width:"7%"}}/></p>
                            <p className="mb-4"><img src={WowLogo} style={{ width:"7%"}}/> : <b>0981312323</b></p>

                            <Form onSubmit={handleOnSubmit}>
                                <Form.Group className="mb-3">
                                    {/* <Form.Control type="email" placeholder="Input your account number" className="mb-3 mx-auto d-block" style={{ width:"40%" }} /> */}

                                    <Form.Control id="transferProof" onChange={handleOnChange} name="transferProof" type="file" className="mb-3 mx-auto d-block" style={{ width:"40%" }}/>
                                    {/* <Modal centered size="lg" show={show} setShow={setShow} onHide={ ()=> setShow(false)}>
                                        <p className="bg-light p-5" style={{ 
                                            color:"green",
                                            border : "none",
                                            fontSize : "20px"
                                        }} >Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you</p>
                                    </Modal> */}
                                </Form.Group>
                                    <Button variant="danger" type="submit" style={{ width:"40%" }}>Send</Button>
                            </Form>
                        </Container>
                    </div>

            </Nav>
        </div>
    )
}

