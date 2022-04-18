import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Booking.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
  const handleBooking =(event) =>{
    event.preventDefault();
    toast('Thanks to Booking. Please Back to Home page')
  }

    return (
        <>
        <div className="booking_area">
            <h1 className='common_title text-center'>Booking Your Pakage</h1>
        </div>
            <div className='container'>
                <div className="booking">
                    <h3 className='text-center'>Please Fell The information</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Control type="text" placeholder="Your Name" required/>
                        </Form.Group>
                        <div className='city_and_country'>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                              <Form.Control type="text" placeholder="City Name" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                              <Form.Control type="text" placeholder="Country Name" required/>
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Control type="number" placeholder="Phone Number" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Control type="email" placeholder="Email" required/>
                        </Form.Group>
                        <Button onClick={handleBooking} className='btn btn-primary d-block mx-auto w-50' type='submit'>Procced</Button>
                  </Form>
                  <ToastContainer></ToastContainer>
                </div>
            </div>
        </>
    );
};

export default Booking;