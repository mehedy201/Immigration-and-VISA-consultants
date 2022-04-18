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
                    <p>My name is Md. Mehedi Hasan. I am a Freelancer. I have been working on Freelancer market morethen 4 year's. Before I'm workin on another sectore in freelanceing market . But I love to work with Web Aplication and Mobile Aplication Development. So I have started in development jurny in 2019. I have done in multiple project in freelancing market in web development. and I got posetive feadback. After that I decied to I will become a pro lebel web developer. I spend much more time for web development finaly i lern HTML, CSS3, Bootstrap, Tailwind CSS, JavaScript, React JS, Node JS, Firebase, etc.Now I am able to develop complete front end Website using React JS. </p>
                    <h4>Why Choche me</h4>
                    <p>My main power is w3 valided hand codded website. Also I provid some extra work for client. like :
                        <li>Free Websie Optimization</li>
                        <li>Low Cost for website</li>
                        <li>Seo Friendly Website</li>
                        <li>Primiume Qualiti website</li>
                        <li>Perfectly Color combination</li>
                    </p>
                    <h4>Our Goal</h4>
                    <p>My Goal is I will Become a Pro lebel Web Developer. I love to work with web development and programing language JavaScript. My next target to achib a job on turing</p>
                </div>
            </div>
        </div>
    );
};

export default About;