import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import FormSignUp from "./FormSignUp";





function ButtonSignUp() {
    const [modalShow, setModalShow] = useState(false);

    return (
      <>
        <Button className="px-5 me-3" variant="secondary" onClick={() => setModalShow(true)}>Sign Up</Button>
        <FormSignUp show={modalShow} onHide={() => setModalShow(false)}
        />
      </>
    );
}


export default ButtonSignUp