import React from 'react';
import {Form, Row,Button, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export default function Register(){

    return(
        <div>
        <h1>REGISTER HERE</h1>
        <Form>
        <Row>
            <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First name" />
            </Col>
            <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last name" />
            </Col>
        </Row>
        
        <Form.Label>Select Gender</Form.Label>
        <Form.Select aria-label="Default select example">
        <option>Gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Prefer not to answer</option>
        </Form.Select>
           
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Row>


        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        <div className='to-login-page'>
            <h3>Already have an account? Login</h3>
            <Link className='reg-login-link' to="/login">LOGIN</Link>
        </div>         





        </div>


    );

};