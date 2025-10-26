import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Download, Star } from "lucide-react"; 

const InstallationPage = () => {
  const [apps, setApps] = useState([]);
  const [sortedApps, setSortedApps] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/topApps.json") 
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setSortedApps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const sortApps = (order) => {
    const sorted = [...apps].sort((a, b) => {
      if (order === "high") return b.ratingAvg - a.ratingAvg;
      else return a.ratingAvg - b.ratingAvg;
    });
    setSortedApps(sorted);
    setIsOpen(false);
  };

  if (loading) {
    return (
      <p className="text-center py-10 font-bold text-3xl">Loading...</p>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-10">
      <h1 className="text-center mt-15 text-5xl font-bold">
        Your Installed Apps
      </h1>
      <p className="text-center mt-4 mb-15 text-xl text-gray-600">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex flex-col md:flex-row gap-5 items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Apps Found</h3>

      
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-40 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none"
          >
            Sort By <ChevronDown className="ml-2 h-4 w-4 text-gray-600" />
          </button>

          {isOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <li>
                <button
                  onClick={() => sortApps("high")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  High to Low
                </button>
              </li>
              <li>
                <button
                  onClick={() => sortApps("low")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Low to High
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>


      <div className="flex flex-col gap-6">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="flex flex-col md:flex-row justify-between items-center px-3 py-4 md:py-0 bg-white rounded-xl shadow w-full"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <img
                src={app.image}
                alt={app.title}
                className="w-20 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-center md:text-start">{app.title}</h3>
                <div className="flex flex-wrap gap-4 mt-2 text-gray-600 items-center">
                
                  <div className="flex gap-2 items-center bg-green-100 px-2 py-1 rounded text-green-600">
                    <Download className="w-4 h-4" /> {app.downloads}
                  </div>
                  <div className="flex gap-2 items-center bg-orange-100 px-2 py-1 rounded text-orange-400">
                    <Star className="w-4 h-4" /> {app.ratingAvg} 
                  </div>
                  <div> {app.size}MB</div>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 mt-4 md:mt-0 bg-red-500 text-white rounded-lg">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstallationPage;
