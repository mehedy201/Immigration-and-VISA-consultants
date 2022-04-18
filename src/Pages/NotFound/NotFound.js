import React from 'react';
import './NotFound.css'
import notFoundImg from '../../images/99776312_s (1).webp'

const NotFound = () => {
    return (
        <div>
            <div className="not_found_area">
                <h1 className='text-center common_title'>Not Found</h1>
            </div>
            <div className='d-flex justify-content-center aling-items-center my-3'>
                <img src={notFoundImg} alt="" />
            </div>
        </div>
    );
};

export default NotFound;