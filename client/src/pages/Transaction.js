import { Nav, Col,Container, Card, Image, Button, Row, Table} from "react-bootstrap";
import { Dropdown ,DropdownButton } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCoffee, faList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from 'react'

import WOW from '../images/WOW_Logo.png';
import profile from '../images/profile.png';
import listTransaction from "../fakeData/ListTransaction";

import { API } from "../config/api";

export default function Transaction(){

    const [transaction, setTransaction]=useState([]); 
    const getTransaction = async ()=> { 
        try {
            const resTransaction = await API.get("/transactions"); 
            setTransaction(resTransaction.data.data.transactions); 
            // setTransaction(resTransaction); 
            console.log(resTransaction.data.data.transactions)
            // console.log(resTransaction.data.data.transactions[1].user.name)
            console.log("hahahaha")
        } catch (error) {
            console.log(error)
        }
    }
    useEffect( ()=>{ 
        getTransaction(); 
    }, [])
  
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
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Users</th>
                                <th>Bukti Transfer</th>
                                <th>Remaining Active</th>
                                <th>Status User</th>
                                <th>Status Payment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {transaction.map((data, id) => (
                                <tr>
                                    <td>{id+1}</td>
                                    <td>{data.user.name}</td>
                                    <td>{data.transferProof}</td>
                                    <td>{data.remainingActive}</td>
                                    <td>{data.userStatus}</td>
                                    <td>{data.paymentStatus}</td>
                                    <td>
                                    <InputGroup className="mb-3">
                                        <DropdownButton id="input-group-dropdown-1">
                                            <Dropdown.Item href="#" style={{ color:"green" }}>Approved</Dropdown.Item>
                                            <Dropdown.Item href="#"style={{ color:"red" }}>Cancel</Dropdown.Item>
                                        </DropdownButton>
                                    </InputGroup>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                        </Table>
                </div>
            </Nav>
        </div>
    )
}

