import { Nav, Col,Container, Card, Image, Button, Row, Modal} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCoffee, faList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useContext} from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from 'react'
import Navbar from './Navbar'
import BookCard from '../components/card/BookCard'
import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom"; 
import { UserContext } from "../context/userContext";

import WOW from '../images/WOW_Logo.png';
import profile from '../images/profile.png';
import mading from '../images/frame-1.png'
import serangkai from '../images/serangkai.png'
import listBook from '../fakeData/ListBook'

import { API } from "../config/api";

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
   let navigate = useNavigate()
   const [state, dispatch] = useContext(UserContext);
//    console.log(state)

    const [show, setShow] = useState(false)
    const [subscribe, setSubscribe] = useState({ 
        isLogin : false,
        name : 'Not Subscribed Yet',
        link : ''
    })

    const handleChange = ()=> { 
        setShow(false)
    }

// GET BOOKS
    const [products, setProducts] = useState([]); 
    const getProducts = async ()=>{ 
        try {
            const response = await API.get("/books"); 
            setProducts(response.data.data.books.data)
            console.log(response)
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect( ()=>{ 
        getProducts(); 
    }, []);

    const breakpointColumnsObj = {
        default: 6,
        1100: 4,
        700: 3,
        500: 2,
      };
    


    // console.log(products);
    const addBook = async ()=> { 
        try {
            // const test = await API.get("/user")
            if(state.user.role === "admin") { 
                navigate("/add-book")  
            }else { 
                navigate("/home-page")  
            }
        } catch (error) {
            console.log(error)
        }

    } 

    return (
        <div>
            <Nav expand="lg">
                <Navbar {...subscribe} />

                <div className="col-9 p-4 ">
                    <Row>
                        <img src={mading} className="mx-auto d-block" alt="" style={{ width:"90%", textDecoration:"none"}} />
                        <p  className="mt-5 mb-5"><h2><b>List Book</b></h2></p>
                        <p><Button variant="primary" onClick={addBook}>Add</Button>{' '}</p>
                        {products.map((data, id) => (
                            <Col md={4} className="mb-4">
                                <Card style={{ width: '18rem' }} key={id}>
                                    <Card.Img onClick={ ()=> setShow(true)} variant="top" src={`http://localhost:5000/uploads/${data.bookFile}`} />
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text> */}
                                        <Card.Text style={{ color:"grey" }}>{data.about}</Card.Text>
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

