import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/error-404.png";
import PageLoader from "../components/PageLoader";

const NoApps = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 150);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader text="Loading..." />;

  return (
    <div className="text-center mt-10 mb-10">
      <img src={image} alt="No Apps" className="mx-auto w-72 opacity-90" />
      <h2 className="text-5xl text-center font-semibold mb-3 mt-7">
        Oops, page not found!
      </h2>
      <p className="mt-5">The page you are looking for is not available.</p>
      <button
        onClick={() => navigate("/")}
        className="btn text-white bg-gradient-to-r from-purple-800 to-purple-600 px-6 py-3 text-lg gap-2 hover:scale-105 transition-all mt-5"
      >
        Go Back
      </button>
    </div>
  );
};

export default NoApps;
