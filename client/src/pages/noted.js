import { Nav, Col,Container, Card, Image, Button, Row, Modal} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCoffee, faList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from 'react'
import Navbar from './Navbar'


import WOW from '../images/WOW_Logo.png';
import profile from '../images/profile.png';
import mading from '../images/frame-1.png'
import serangkai from '../images/serangkai.png'
import listBook from '../fakeData/ListBook'


const style = { 
    shadow : { 
        boxShadow: "1px 3px 1px #9E9E9E"
    }
}
const element =  { 
   cofee: <FontAwesomeIcon icon={faCoffee} />, 
   user : <FontAwesomeIcon icon={faUser} />,  
   list : <FontAwesomeIcon icon={faList} />,  
   logout : <FontAwesomeIcon icon={faRightFromBracket} />, 

}

export default function HomePage(){
    const [show, setShow] = useState(false)
    const [subscribe, setSubscribe] = useState({ 
        isLogin : false,
        name : 'Not Subscribed Yet',
        link : ''
    })

    const handleChange = ()=> { 
        setShow(false)
    }
    return (
        <div>
            <Nav expand="lg">
                <Navbar {...subscribe} />

                <div className="col-9 p-4 ">
                    <Row>
                        <img src={mading} className="mx-auto d-block" alt="" style={{ width:"90%", textDecoration:"none"}} />
                        <p  className="mt-5 mb-5"><h2><b>List Book</b></h2></p>

                        {listBook.map((data, id) => (
                            <Col md={4} className="">
                                <Card style={{ width: '18rem' }} key={id}>
                                    <Card.Img onClick={ ()=> setShow(true)} variant="top" src={data.image} />
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text> */}
                                        <Card.Text style={{ color:"grey" }}>{data.author}</Card.Text>
                                    </Card.Body>
                                    <Modal centered size="lg" show={show} setShow={setShow} onHide={ ()=> setShow(false)}>
                                        <p onClick={handleChange} className="bg-light p-5" style={{ 
                                            color:"red",
                                            border : "none",
                                            fontSize : "20px"
                                            }} >Please make a payment to read the latest books</p>
                                    </Modal>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </div>

            </Nav>
        </div>
    )
}

