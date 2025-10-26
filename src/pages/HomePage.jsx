import React from 'react';
import HeroSection from '../components/HeroSection';
import Numbers from '../components/Numbers';
import TrendingApp from '../components/TrendingApp';
import Footer from '../components/Footer';


const HomePage = () => {
    return (
        <div>
         
           <HeroSection></HeroSection>
           <Numbers/>
           <TrendingApp/>
           
        </div>
    );
};

export default HomePage;