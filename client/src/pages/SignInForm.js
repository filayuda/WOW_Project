import React from 'react'

export default function SignInForm {
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
        <Modal.Body>
              <Form className="d-grid gap-2" onSubmit={handleOnSubmit}>
                  <Form.Control id="email" name="email" className="mb-3" type="email" placeholder="Enter email" />
                  <Form.Control id="password" name="password" className="mb-3" type="password" placeholder="Enter password" />
                  <Button variant="danger" type="submit" className="">
                          Sign In
                      </Button>
                  <p style={{ textAlign:"center" }}>Don't have an account ? Klik <b>Here</b></p>
              </Form>
        </Modal.Body>
      </Modal>
    )
}
