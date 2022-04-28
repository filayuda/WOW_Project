import { Form, Button, Modal } from "react-bootstrap"; 
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { UserContext } from "../context/userContext";
import { Alert } from "react-bootstrap";

import { API } from "../config/api";
 
function FormSignIn(props) { 
  const navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null); 
  const [form, setForm] = useState({ 
    email : "", 
    password : "", 
  }); 
  const {email, password} = form; 

  const handleOnChange = (e) => { 
    setForm({ 
      ...form, 
      [e.target.name] : e.target.value,
    })
  }

  const handleOnSubmit = async (e) =>{ 
    try {
      e.preventDefault(); 

      // Configuration
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(form);
      const response = await API.post("/login", body, config);

      // Checking process
      if (response?.status === 200) {
        // Send data to useContext
       
        // Status check
        if (response.data.data.role === "admin") {
          navigate('/transaction') ;
        } else {
          navigate('/') ;
        }

        
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        const alert = (
          <Alert variant="success" className="py-1">
            Login success
          </Alert>
        );
        setMessage(alert);
      }
      // if(response.data.status === "Success"){ 
      //   if(response.data.data.user.role === "admin"){ 
      //     navigate("/home-page")
      //   }else {
      //     navigate("/")
      //   }

      //   const alert = (
      //     <Alert variant="success" className="py-1">
      //       Login success
      //     </Alert>
      //   );
      //   setMessage(alert);
      // }
      
      console.log(response);
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  }

  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="fw-bold">
          Sign In
        </Modal.Title>
      </Modal.Header>
      {message && message}
      <Modal.Body>
            <Form className="d-grid gap-2" onSubmit={handleOnSubmit}>
                <Form.Control onChange={handleOnChange} id="email" name="email" className="mb-3" type="email" placeholder="Enter email" value={email} />
                <Form.Control onChange={handleOnChange} id="password" name="password" className="mb-3" type="password" placeholder="Enter password" value={password} />
                <Button variant="danger" type="submit" className="">Sign In</Button>
                <p style={{ textAlign:"center" }}>
                  Don't have an account ? Klik <b>Here</b>
                </p>
            </Form>
      </Modal.Body>
    </Modal>
  );

  
} 
 
export default FormSignIn