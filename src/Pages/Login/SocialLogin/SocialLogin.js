import React from 'react';
import './SocialLogin.css';
import googleIcon from '../../../images/social_icon/google.png'
import githubIcon from '../../../images/social_icon/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {

     // Sing up With Google
     const [signInWithGoogle, gouser, goloading, goerror] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
            <div className='social_icon_div'>
            <button onClick={() => signInWithGoogle()} className='social_btn d-flex align-items-center'><img className='social_icon' src={googleIcon} alt="" /><p className='m-0'>Google Sing In</p></button>
            <button className='social_btn d-flex align-items-center'><img className='social_icon' src={githubIcon} alt="" /><p className='m-0'>GitHub Sing In</p></button>
            </div>
        </div>
        </div>
    );
};

export default SocialLogin;