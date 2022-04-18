import React from 'react';
import './SocialLogin.css';
import googleIcon from '../../../images/social_icon/google.png'
import githubIcon from '../../../images/social_icon/github.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
            <div className='social_icon_div'>
            <button className='social_btn d-flex align-items-center'><img className='social_icon' src={googleIcon} alt="" /><p className='m-0'>Google Sing In</p></button>
            <button className='social_btn d-flex align-items-center'><img className='social_icon' src={githubIcon} alt="" /><p className='m-0'>GitHub Sing In</p></button>
            </div>
        </div>
        </div>
    );
};

export default SocialLogin;