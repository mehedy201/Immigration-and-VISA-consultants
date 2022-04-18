import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingUp.css'

const SingUp = () => {
    const navigate = useNavigate();
    const logInButton = () => {
        navigate('/login')
    }

    return (
        <div>
            <div className="sing_up_page">
                <h1 className="common_title text-center">Register!!!</h1>
            </div>
            <div className="sing_up_area container">
                <div className="inside_sing_up">
                    <h2 className='text-center'>Please Register</h2>
                    <p className='text-center'>Please register and join our online family</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Control type="text" placeholder="Enter Your Name" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Control type="number" placeholder="Enter Phone Number" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                          <Form.Control type="password" placeholder="Password" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                          <Form.Control type="password" placeholder="Confirm Password" required/>
                        </Form.Group>
                        <Button className='btn btn-primary d-block mx-auto w-50' type='submit'>Submit</Button>
                  </Form>
                  <p className='pt-3 mb-1'>If you have account? <span onClick={logInButton} className="text-primary text-decoration-underline singup_link">Please log in</span></p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;