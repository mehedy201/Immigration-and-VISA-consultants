import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Package.css'

const Package = ({pakage}) => {
    const {name, img, price, des} = pakage;

    const navigate = useNavigate();
    const pakageButton = (name) => {
        navigate('/booking')
    }
    return (
        <div className='single_package'>
            <div className="pac">
                <img src={img} alt="" />
                <div className="pac_info">
                    <h3>{name}</h3>
                    <p>{des}</p>
                    <h5>Price: ${price}</h5>
                    <button onClick={pakageButton} className='pakage_button btn bg-primary d-block mx-auto'>Booking...</button>
                </div>
            </div>
        </div>
    );
};

export default Package;