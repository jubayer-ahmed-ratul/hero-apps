import React from 'react';
import { useNavigate } from "react-router-dom";
import image from "../assets/App-Error.png";

const NoApps = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center mt-10">
            <img src={image} alt="No Apps" className="mx-auto w-72 opacity-90" />
            <h2 className='text-5xl text-center font-semibold mb-3 mt-7'>
                OPPS!! APP NOT FOUND
            </h2>
            <p className='mt-5'>
                The App you are requesting is not found on our system. Please try another app.
            </p>
            <button 
                onClick={() => navigate("/apps")} 
                className="btn text-white bg-gradient-to-r from-purple-800 to-purple-600 px-6 py-3 text-lg gap-2 hover:scale-105 transition-all mt-5 mb-5"
            >
                Go Back
            </button>
        </div>
    );
};

export default NoApps;
