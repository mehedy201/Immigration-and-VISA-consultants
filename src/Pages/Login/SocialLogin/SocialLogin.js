import React from 'react';
import './SocialLogin.css';
import googleIcon from '../../../images/social_icon/google.png'
import githubIcon from '../../../images/social_icon/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // Sing In with Google
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

     // Sing In with Github 
     const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

     // Error message
    let errorElement;
    if (error || error1) {
        errorElement = <div> <p className='text-danger'>Error: {error?.message} {error1?.message}</p></div>
      }
      if(user || user1){
        navigate(from, { replace: true });
      }
    // Sing In with Facebook

   
    



    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='social_icon_div'>
                {errorElement}
            <button onClick={() => signInWithGoogle()} className='social_btn d-flex align-items-center'><img className='social_icon' src={googleIcon} alt="" /><p className='m-0'>Google Sing In</p></button>
            <button onClick={() => signInWithGithub()} className='social_btn d-flex align-items-center'><img className='social_icon' src={githubIcon} alt="" /><p className='m-0'>GitHub Sing In</p></button>
            </div>
        </div>
    );
};

export default SocialLogin;