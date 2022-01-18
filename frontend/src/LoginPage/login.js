import React from 'react';
import {Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './login.css'


function login(){
    return( 
        <>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button className='btn' variant="primary">
    Submit
  </Button>
</Form>
<div className='to-reg-page'>
            <h3>New to this site? Register here</h3>
            <Link to="/">Register</Link>
        </div>
        </>
    );
};
export default login;