'use strict';
import { Button, Modal } from 'react-bootstrap';
import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
const ContactUs = () => {
    function Contact() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <div align="center">
                <img
                    className="d-block w-100"
                    src="Contact Us.jpg"
                    alt="Contact Us img"
                    height="600px"

                />
                <h3> Contact Us</h3>
                <p> Need to contact us? Please Click on the button below and fill in your details and we will be intouch with you soon!</p>
                <Button variant="primary" onClick={handleShow}>
                    Contact Us
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact us</Modal.Title>
                    </Modal.Header>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="John" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput2">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="24" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Issues/Complaints</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
    return (<Contact />);
}
export default ContactUs;