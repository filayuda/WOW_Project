import { Nav, Col,Container, Card, Image, Button, Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCoffee, faList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from 'react'
import Navbar from './Navbar'
import ReadBook from "./ReadBook";


import mading from '../images/card_profile-01.png'
import listBookProfile from '../fakeData/ListBookProfile'
import road from '../images/road.png'




// const element =  { 
//     name : <listBook />,
// }

export default function ReadBookFirst(){

    const [subscribe, setSubscribe] = useState({ 
        isLogin : false,
        name : 'Subscribed',
        link : ''
    })

    const handleChange = () => { 
        setSubscribe({
            isLogin : true,
        })
    }
    return (


        <div>
            <Nav expand="lg">
                
                {/* <Navbar subscribe="Not Subscribed Yet"/> */}
                <Navbar {...subscribe} />

                <div className="col-5 p-4 ">
                    <Row>
                        <Col md={8} className="p-4">
                            <Card style={{ width: '50rem', border:"none" }}>
                                <Card.Img variant="top" src={road} style={{width:"40%"}}/>
                            </Card>
                        </Col>
                        <Col md={3} className="p-4">
                            <Card style={{ width: '50rem', border:"none" }}>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title><h1>Test on the Road</h1></Card.Title>
                                    <Card.Text className="mb-5" style={{ color:"grey" }}>Rachel Hartman</Card.Text>

                                    <Card.Title><b>Publication Date</b></Card.Title>
                                    <Card.Text className="mb-5" style={{ color:"grey" }}>April 2020</Card.Text>

                                    <Card.Title><b>Publication Date</b></Card.Title>
                                    <Card.Text className="mb-5" style={{ color:"grey" }}>436</Card.Text>
                                    
                                    <Card.Title><b style={{ color:"red" }}>ISBN</b></Card.Title>
                                    <Card.Text className="mb-5" style={{ color:"grey" }}>9788992872</Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={12}>
                            <Card style={{ width: '50rem', border:"none" }}>
                                <h3 className="mb-4">About This Book</h3>
                                <p style={{ textAlign:"justify", fontSize :"14px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam voluptates sed quod nihil temporibus facilis culpa aperiam, distinctio, asperiores quidem explicabo earum, velit ex non similique commodi assumenda illum. Voluptate beatae at, architecto, modi quia non vel sint libero voluptatum fugit deserunt? Odit quasi debitis perferendis veritatis necessitatibus dolorem, vero dolores ipsa, laudantium provident explicabo! Voluptate at numquam voluptatibus soluta dolores optio ea dolor nostrum atque expedita cumque hic, asperiores reiciendis a aliquam porro tenetur, saepe facilis officia repellat? Excepturi enim dignissimos id, esse aut nobis iure officiis, corporis ut, provident repellat expedita possimus fuga dolor velit. Architecto, nisi? <br/><br/> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam voluptates sed quod nihil temporibus facilis culpa aperiam, distinctio, asperiores quidem explicabo earum, velit ex non similique commodi assumenda illum. Voluptate beatae at, architecto, modi quia non vel sint libero voluptatum fugit deserunt? Odit quasi debitis perferendis veritatis necessitatibus dolorem, vero dolores ipsa, laudantium provident explicabo! Voluptate at numquam voluptatibus soluta dolores optio ea dolor nostrum atque expedita cumque hic, asperiores reiciendis a aliquam porro tenetur, saepe facilis officia repellat? Excepturi enim dignissimos id, esse aut nobis iure officiis, corporis ut, provident repellat expedita possimus fuga dolor velit. Architecto, nisi?</p></p>
                            </Card>
                        </Col>
                        <Col md={2}>
                            <Card style={{ width: '7rem', border:"none"}}>
                                <Link to='/transaction'>
                                    <Button className="btn btn-danger" size="sm" variant="secondary">Add Book</Button>
                                </Link>
                            </Card>
                        </Col>
                        <Col md={2}>
                            <Card style={{ width: '7rem', border:"none"}}>
                                <Link to='/read-book'>
                                    <Button className="btn btn-primary" size="sm" variant="secondary">Ready Book</Button>
                                </Link>
                            </Card>
                        </Col> 
                        

                    </Row>
                </div>
            </Nav>
        </div>


    )
}

