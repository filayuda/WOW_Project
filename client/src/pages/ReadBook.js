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

import WOW from '../images/WOW_Logo.png';
import book1 from '../images/book1.png'




// const element =  { 
//     name : <listBook />,
// }

export default function ReadBook(){

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
                <div className="col-3 p-4">
                    <Link to='/home-page'>
                        <img src={WOW} className="img-fluid mx-auto d-block mb-4" alt="logo" style={{width:"35%",padding:"0px", transform: "rotate(-15deg)" }}/>
                    </Link>
                    <img src={book1} className="" alt="logo" style={{padding:"0px" }}/>

                </div>
            </Nav>
        </div>
    )
}

