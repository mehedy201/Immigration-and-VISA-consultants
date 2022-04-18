import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SingUp.css'

const SingUp = () => {
  // Navigate log in page 
    const navigate = useNavigate();
    const logInButton = () => {
        navigate('/login')
    }
  // Create user using email and password hooks firebase
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSingUpButton = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
        
        console.log(name, email, password)
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
                          <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                        </Form.Group>
                        <Button onClick={handleSingUpButton} className='btn btn-primary d-block mx-auto w-50' type='submit'>Submit</Button>
                  </Form>
                  <p className='pt-3 mb-1'>If you have account? <span onClick={logInButton} className="text-primary text-decoration-underline singup_link">Please log in</span></p>
                  <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SingUp;