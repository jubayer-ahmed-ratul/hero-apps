import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Numbers from '../components/Numbers';
import TrendingApp from '../components/TrendingApp';
import Footer from '../components/Footer';


const HomePage = () => {
    return (
        <div>
           <Navbar/>
           <HeroSection></HeroSection>
           <Numbers/>
           <TrendingApp/>
           <Footer></Footer>
        </div>
    );
};

export default HomePage;