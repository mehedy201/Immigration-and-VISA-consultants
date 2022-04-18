import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate()
    const singUpButton = () => {
        navigate('/singup')
    }

    return (
        <>
            <div className='login_page'>
                <h1 className='text-center common_title'>Log In</h1>
            </div>
            <div className="login_area container">
                <div className="inside_login">
                  <h2 className='text-center'>Please Log In !!!!</h2>
                  <p className='text-center'>Please Log In/Sing Up and Stay with Us</p>
                  <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control type="email" placeholder="Enter email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Control type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button className='btn btn-primary d-block mx-auto w-50' type='submit'>Submit</Button>
                  </Form>
                  <p className='pt-3 mb-1'>If don't have account? <span onClick={singUpButton} className="text-primary text-decoration-underline singup_link">Please SingUp</span></p>
                  <p className='pt-0'>If forget Password <span className="text-primary text-decoration-underline singup_link">Reset Password</span></p>
                  <SocialLogin></SocialLogin>
                </div>
            </div>
        </>
    );
};

export default Login;