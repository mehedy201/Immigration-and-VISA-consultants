import React from 'react';
import './About.css'
import mehediIMG from '../../images/Mehedi1.png'

const About = () => {
    return (
        <div>
            <div className='about_page'>
                <div className="container">
                    <h1 className='text-center common_title'>About Me</h1>
                </div>
            </div>
            <div className="container about_me_and_image">
                <div className="about_img">
                    <img src={mehediIMG} alt="" />
                </div>
                <div className="about_info p-3">
                    <h4>About Me</h4>
                    <p>My name is Md. Mehedi Hasan. I'm a Front-End web developer with React JS. My only goal is to get a job at a software company in the United States through Turin.com </p>
                    <p>Besides, I have been doing freelancing since 2018. At first I was working on seo, data-entry, social media marketing. From 2019 I started learning and working on web development. In between I have developed various client websites. And the present is learning more. I did not usually take any cse or it related academic education. I do development work and learn from the field of liking. Programming and web development is one of my favorite fields</p>
                    
                    <h4>Why Choche me</h4>
                    <p>My main power is w3 valided hand codded website. Also I provid some extra work for client. like :
                        <li>Free Websie Optimization</li>
                        <li>Seo Friendly Website</li>
                        <li>Primiume Qualiti website</li>
                        <li>Perfectly Color combination</li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;