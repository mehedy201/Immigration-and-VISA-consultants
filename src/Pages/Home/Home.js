import React from 'react';
import AboutImigration from './AboutImigration/AboutImigration';
import Slider from './Slider/Slider';
import './Home.css'
import Packages from './Packages/Packages';
import Expert from './Expert/Expert';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutImigration></AboutImigration>
            <Packages></Packages>
            <Expert></Expert>
        </div>
    );
};

export default Home;