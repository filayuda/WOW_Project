import { Container,Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function SignUp() {
  return (
    <Container >
        <Modal.Dialog>
            <Form className="p-5">
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label className="mb-4 " style={{ fontFamily:"sans-serif" }}><h1 className="fw-bold">Sign In</h1></Form.Label>
                    <Form.Control type="email" placeholder="Email" className="mb-3"/>
                    <Form.Control type="password" placeholder="Password" className="mb-3"/>
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <div className="d-grid gap-2 col-12 mx-auto mb-3">
                    <Button variant="danger" type="submit" className="d-grid gap-2">
                        Sign Up - TEST
                    </Button>
                </div>
                <p style={{ textAlign:"center" }}>Already have an account ? Klik <Link to='/sigin'><b>Here</b></Link></p>
            </Form>
        </Modal.Dialog>
    </Container>
    
  );
}

export default SignUp;
