import React from "react";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import hero from "../assets/hero.png"

const HeroSection = () => {
  return (
    <section className="text-center pt-10 px-4 bg-[#f5f5f5] flex flex-col items-center">
      
      <h1 className="text-5xl md:text-6xl font-bold">
        We Build <br />
        <span className="bg-gradient-to-r from-purple-800 to-purple-600 text-transparent bg-clip-text ">
          Productive 
        </span> Apps
      </h1>

      <p className="mt-6 text-gray-600 text-lg">
        At <span className="font-semibold">HERO.IO</span>, we craft innovative
        apps designed to make everyday life simpler, smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>

    
      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        <button className="btn bg-white py-6 border-2 border-gray-500 ">
          <img src={playstore} alt="Play Store" className="h-6 w-auto" />
          <span>Get it on PlayStore</span>
        </button>
        <button className="btn bg-white py-6 border-2 border-gray-500">
          <img src={appstore} alt="App Store" className="h-6 w-auto" />
          <span>Download on AppStore</span>
        </button>
      </div>

      <img className="h-50 md:h-100 mt-10" src={hero} alt="" />
    </section>
  );
};

export default HeroSection;
