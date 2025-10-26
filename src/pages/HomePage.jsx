import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Numbers from '../components/Numbers';
import TrendingApp from '../components/TrendingApp';


const HomePage = () => {
    return (
        <div>
           <Navbar/>
           <HeroSection></HeroSection>
           <Numbers/>
           <TrendingApp/>
        </div>
    );
};

export default HomePage;