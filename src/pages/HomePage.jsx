import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Numbers from '../components/Numbers';


const HomePage = () => {
    return (
        <div>
           <Navbar/>
           <HeroSection></HeroSection>
           <Numbers/>
        </div>
    );
};

export default HomePage;