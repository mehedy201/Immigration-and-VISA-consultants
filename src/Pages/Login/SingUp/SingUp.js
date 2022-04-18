import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
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
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if(user){
      navigate(from, { replace: true });
    }
    let errorElement;
    if(error){
      errorElement = <p className='text-danger mb-0 mt-2'>{error?.message}</p>
    }
    let loadingElement;
    if(loading){
      loadingElement = <div width='20px' class="spinner-grow text-primary" role="status">
                            <span class="sr-only"></span>
                      </div>
    }

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSingUpButton =async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password)
        
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
                    <Form onSubmit={handleSingUpButton}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                        </Form.Group>
                        <Button className='btn btn-primary d-block mx-auto w-50' type='submit'>Sing Up</Button>
                  </Form>
                  {errorElement}
                  {loadingElement}
                  <p className='pt-3 mb-1'>If you have account? <span onClick={logInButton} className="text-primary text-decoration-underline singup_link">Please log in</span></p>
                  <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SingUp;