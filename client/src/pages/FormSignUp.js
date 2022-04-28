import { Form, Button, Modal } from "react-bootstrap"; 
import React, { useContext, useState } from "react";
import {UserContext} from "../context/userContext"; 
import { useNavigate } from "react-router-dom"; 
import { Alert } from "react-bootstrap";

import {API} from "../config/api"; 
 
function FormSignUp(props) { 
  const navigate = useNavigate();
  
  // const [state, dispatch] = useContext(UserContext);
  const [state, setAlert] = useState(true)
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({ 
    name : "",
    email : "", 
    password : "",
    role : "customer"
  }); 

  const {name, email, password, role} = form; 
  // const dataForm = {
  //   isLogin : false, 
  //   email : '',
  //   password : '',
  // }


  const handleOnChange = (e) => { 
    setForm({ 
      ...form,
      [e.target.name] : e.target.value
    });
  };


  const handleOnSubmit = async (e) => { 
    try {
      e.preventDefault(); 

      // Configuration Content-type
      const config = { 
        headers : { 
          "Content-type" : "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form); 

      // Insert data user to database
      const response = await API.post("/register", body, config);
      
      console.log(response)
      // Notification
      if (response.data.status == "Success") {
       
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
        setForm({
          name: "",
          email: "",
          password: "",
        });
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }

    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  
  }

  // const [open, setOpen] = useState() ; 

  // const handleOpen = (e) =>{ 
  //   e.preventDefault() ; 
  //   setOpen(true) ;
  // }
  // const handleClose = (e) =>{ 
  //   e.preventDefault() ; 
  //   setOpen(false) ;
  // }
  
  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="fw-bold">
          Sign Up - WOW
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {message && message}
            <Form className="d-grid gap-2" onSubmit={handleOnSubmit}>
                <Form.Control onChange={handleOnChange} id="email" name="email" className="mb-3" type="email" placeholder="Enter email" />
                <Form.Control onChange={handleOnChange} id="password" name="password" className="mb-3" type="password" placeholder="Enter password" />
                <Form.Control onChange={handleOnChange} id="name" name="name" className="mb-3" type="text" placeholder="FullName" />
                <Button variant="danger" type="submit" className="">Sign Up</Button>
                <p style={{ textAlign:"center" }}>
                  Don't have an account ? Klik <b>Here</b>
                </p>
            </Form>
      </Modal.Body>
    </Modal>
  );

  
} 
 
export default FormSignUp