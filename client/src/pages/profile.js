import { Nav, Col, Card, Button, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import React from 'react'
import Navbar from './Navbar'
import { faVenus,faEnvelope,faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from "../context/userContext";

import serangkai from '../images/serangkai.png'
import photoProfile from '../images/profile1.png'
import road from '../images/road.png'
import { API } from "../config/api";


const element =  { 
    email : <FontAwesomeIcon icon={faEnvelope} />,
    gender : <FontAwesomeIcon icon={faVenus} />,
    phone : <FontAwesomeIcon icon={faPhone} />,
    address : <FontAwesomeIcon icon={faLocationDot} />,
 
 }


// const element =  { 
//     name : <listBook />,
// }

export default function Profile(){
    const [state, dispatch] = useContext(UserContext);

    const getUser = async ()=>{ 
        const response = await API.get("/user");
        console.log(response)
        console.log(response.data.data.user.data.name)
    }
    
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


// GET USER
    const [user, setUser] = useState([]); 
    const getUserId = async ()=> { 
        try {
            const responseUser = await API.get("/user")
            setUser(responseUser.data.data.user.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect( ()=>{ 
        getUserId(); 
    }, []) ;

    console.log(user.name); 


    const [book, setBook] = useState([]); 
    const getBook = async ()=>{ 
        try {
            const responseBook = await API.get("/user"); 
            setBook(responseBook.data.data.user.data.books)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect( ()=>{ 
        getBook();
    }, [])

    return (
        <div>
            <Nav expand="lg">
                <Navbar {...subscribe} />


                {subscribe.isLogin ? (
                    <div className="col-5 p-4 ">
                        <Row>
                            <Col md={8} className="p-4">
                                <Card style={{ width: '50rem', border:"none" }}>
                                    <Card.Img onClick={handleChange} variant="top" src={road} style={{width:"40%"}}/>
                                </Card>
                            </Col>
                            <Col md={3} className="p-4">
                                <Card style={{ width: '50rem', border:"none" }}>
                                    <Card.Img onClick={handleChange} variant="top" src="" />
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
                            <Col md={4}>
                                <Card style={{ width: '7rem', border:"none"}}>
                                    <Link to='/read-book'>
                                        <Button className="btn btn-primary me-md-2" size="sm" variant="secondary">Ready Book</Button>
                                    </Link>
                                </Card>
                            </Col>

                        </Row>
                    </div>
                ) : (
                    <div className="col-9 p-4 ">
                    <Row>
                        <p  className="mt-5 mb-3"><h2><b>Profile</b></h2></p>
                            <Row onClick={getUser} className="p-4 ms-1 rounded" style={{ backgroundColor:"#ffd8d9"}}>
                                <Col xs={8}> 
                                    <Row>
                                        <Col className="me-4" xs={1} style={{ fontSize:"28px" }}>
                                            <p>{element.email} </p>
                                            <p>{element.gender}</p>
                                            <p>{element.phone}</p>
                                            <p>{element.address}</p>
                                        </Col>
                                        <Col xs={9} style={{ fontSize:"14px" }}>
                                            <div>
                                                <p>{user.email}
                                                    <br/>
                                                    <small style={{ color:"grey" }}>Email</small>
                                                </p>
                                            </div>
                                            <div>
                                                <p>Male
                                                    <br/>
                                                    <small style={{ color:"grey" }}>Gender</small>
                                                </p>
                                            </div>
                                            <div>
                                                <p>089601621991
                                                    <br/>
                                                    <small style={{ color:"grey" }}>Mobile Phone</small>
                                                </p>
                                            </div>
                                            <div>
                                                <p>Jl. Buaran PLN Kp. Kelapa Indah Rt.02/03 Kel. Cikokol Kec.Tangerang
                                                    <br/>
                                                    <small style={{ color:"grey" }}>Address</small>
                                                </p>
                                            </div>
                                           
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={4}>
                                    <div className="d-grid gap-2" >
                                        <img src={photoProfile} className="rounded mb-2" style={{ width:"70%"}}/>
                                        <Button variant="danger" size="sm">Edit Profile</Button>
                                    </div>
                                </Col>
                            </Row>
                        {/* <img src={mading} className="mx-auto d-block mb-5" alt="" style={{ width:"100%", textDecoration:"none"}} /> */}
                        <p  className="mt-5 mb-3"><h2><b>My List Book</b></h2></p>
                        
                            {/* {listBookProfile.map((data, id) => (
                                    <Col md={4} className="">
                                        <Card style={{ width: '10rem' }}>
                                        <Card.Img onClick={handleChange} variant="top" src={data.image} />
                                        <Card.Body>
                                            <Card.Title>{data.name}</Card.Title>
                                            <Card.Text style={{ color:"grey" }}>{data.author}</Card.Text>
                                        </Card.Body>
                                        </Card>
                                    </Col>
                            ))} */}

                            {book.map((data, id) => (
                                <Col md={4} className="">
                                    <Card style={{ width: '18rem' }} key={id}>
                                        <Card.Img  variant="top" src={`http://localhost:5000/uploads/${data.bookFile}`}  />
                                        <Card.Body>
                                            <Card.Title>{data.title}</Card.Title>
                                            {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text> */}
                                            <Card.Text style={{ color:"grey" }}>{data.about}</Card.Text>
                                        </Card.Body>
                                        {/* <Modal centered size="lg" show={show} setShow={setShow} onHide={ ()=> setShow(false)}>
                                            <p onClick={handleChange} className="bg-light p-5" style={{ 
                                                color:"red",
                                                border : "none",
                                                fontSize : "20px"
                                                }} >Please make a payment to read the latest books</p>
                                        </Modal> */}
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                </div>
                )}

                

            </Nav>
        </div>
    )
}

