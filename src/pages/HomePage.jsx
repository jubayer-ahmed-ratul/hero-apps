import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Numbers from "../components/Numbers";
import TrendingApp from "../components/TrendingApp";
import PageLoader from "../components/PageLoader";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader text="Loading Home..." />;

  return (
    <div>
      <HeroSection />
      <Numbers />
      <TrendingApp />
    </div>
  );
};

export default HomePage;
