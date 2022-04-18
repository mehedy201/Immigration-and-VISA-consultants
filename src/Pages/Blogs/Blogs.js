import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='blogs_page'>
                <div className="container">
                    <h1 className='text-center common_title'>Blogs</h1>
                </div>
            </div>
            <div className="question_ans container my-5">
                <h2>1. Difference between authorization and authentication?</h2>
                <h5>Authentication</h5>
                <p>Authentication is a user of a website who has never created a user account on that website before. The user wants to create a new account and has to go through various processes to create this account. For example, if the user's valid email and other information are acceptable, then the person can create a user account. And this process is usually called authentication. A good process for authentication is firebase authentication</p>
                <h5>Authentication</h5>
                <p>Authorization is when the website user has a previous user account. He wants to gain access to that previous account. Then log in with some specific information from the information that the user has become the user (such as email, password). Authorization allows him to access that account if it matches his previous information</p>
                <br />
                <h2>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Firebase is a third-party authentication medium. firebase is a service of Google. Which made our job a lot easier. Because if we don't use firebase then we have to code a lot more on our own. And there are concerns about security. Which releases firebase authentication. This speeds up the work of developers. A lot of comparative code has to be reduced. And it's very secure. For which you don't have to worry about security.</p>
                <p>There are alternatives to authentication. I can use different types of third party authentication besides firebase like:</p>
                <li>Octa</li>
                <li>Parse</li>
                <li>Back4App</li>
                <li>AWS Amplify</li>
                <h2 className='mt-4'>3. What other services does firebase provide other than authentication?</h2>
                <p>Firebase Authentication provides a wide range of free services such as:</p>
                <li>Cloud Firestore</li>
                <li>Cloud Functions</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li>Predictions</li>
                <li>Cloud Messaging</li>
                <li>Dynamic Links</li>
                <li>Remote Config</li>
            </div>
        </div>
    );
};

export default Blogs;