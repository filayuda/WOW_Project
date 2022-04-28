import { Nav, Col,Container, Card, Image, Button, Row, Form} from "react-bootstrap";
import { Dropdown ,DropdownButton } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCoffee, faList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from 'react'
import { UserContext } from "../context/userContext";


import WOW from '../images/WOW_Logo.png';
import profile from '../images/profile.png';
import listTransaction from "../fakeData/ListTransaction";

import {API} from '../config/api'

// const element =  { 
//     name : <listBook />,
// }

export default function FormAddBook(){
    let navigate = useNavigate() ;
    const [message, setMessage] = useState(null); 

    const [form, setForm] = useState( { 
        title : "", 
        publicationDate : "",
        pages : "",
        author : "", 
        isbn : "", 
        about : "", 
        bookFile : "", 
    }); 

    const {title, publicationDate, pages, author, isbn, about, bookFile} = form; 

    const handleOnChange = (e) => { 
        setForm({ 
            ...form, 
            [e.target.name] : e.target.type === "file" ? e.target.files : e.target.value,
        }); 

        // if(e.target.type === "file") { 
        //     let url = URL.createObjectURL(e.target.files[0])

        // }
    }; 

    const handleOnSubmit = async (e) => { 
        try {
            e.preventDefault(); 
            const config = { 
                headers : { 
                    "Content-type" : "multipart/form-data",
                },
            }; 

            const formData = new FormData() ; 
            formData.set("title", form.title); 
            formData.set("publicationDate", form.publicationDate); 
            formData.set("pages", form.pages); 
            formData.set("author", form.author); 
            formData.set("isbn", form.isbn); 
            formData.set("about", form.about); 
            formData.set("bookFile", form.bookFile[0], form.bookFile[0].name); 

            // console.log(formData);
            console.log(form);
            const response = await API.post("/book", formData, config);
            console.log(response);

            navigate("/home-page");


        } catch (error) {
            console.log(error)
        }
    }

    // const [state, dispatch] = useContext(UserContext);
    // // const test = state.user.role ; 
    // // console.log(test)

    return (
        <div>
            <Nav expand="lg">
                <div className="col-3 p-4">
                    <Link to='/home-page'>
                        <img src={WOW} className="img-fluid mx-auto d-block mb-4" alt="logo" style={{width:"35%",padding:"0px", transform: "rotate(-15deg)" }}/>
                    </Link>

                </div>
                <div className="col-8 p-4">
                    <img src={profile} className="img-fluid float-end mb-4" alt="logo" style={{width:"7%",padding:"0px", transform: "rotate(-15deg)" }}/>

                </div>
                <div className="col-9 p-4 mx-auto">
                    <h3 className="mb-5">Add Book</h3>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Control onChange={handleOnChange} className="mb-3" id="title" name="title" type="text" placeholder="Tittle" />
                            <Form.Control onChange={handleOnChange} className="mb-3" id="publicationDate" name="publicationDate"  type="date" placeholder="Publication Date" />
                            <Form.Control onChange={handleOnChange} className="mb-3" id="pages" name="pages"  type="text" placeholder="Pages" />
                            <Form.Control onChange={handleOnChange} className="mb-3" id="author" name="author"  type="text" placeholder="Author" />
                            <Form.Control onChange={handleOnChange} className="mb-3" id="isbn" name="isbn"  type="text" placeholder="ISBN" />
                            <Form.Control onChange={handleOnChange} className="mb-3" id="about" name="about"  as="textarea" style={{ height:"200px" }} type="textarea" placeholder="About This Book" />
                            <Form.Control onChange={handleOnChange} className="mb-3" id="bookFile" name="bookFile"  type="file" placeholder="Enter email" />
                          
                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group> */}
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button className="float-end" variant="danger" type="submit">
                            Add Book
                        </Button>
                    </Form>
                    <p id="test" name="test"></p>
                </div>
            </Nav>
        </div>
    )
}

