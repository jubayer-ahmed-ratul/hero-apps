import React, { useEffect, useState } from "react";
import { ChevronDown, Download, Star } from "lucide-react";

const InstallationPage = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortedApps, setSortedApps] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
    setSortedApps(apps);
  }, []);

  const sortApps = (order) => {
    const sorted = [...installedApps].sort((a, b) =>
      order === "high" ? b.ratingAvg - a.ratingAvg : a.ratingAvg - b.ratingAvg
    );
    setSortedApps(sorted);
    setIsOpen(false);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-10">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-4">
        Your Installed Apps
      </h1>

      {installedApps.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No apps installed yet 😢
        </p>
      ) : (
        <>
          {/* Sorting Dropdown */}
          <div className="flex justify-end mb-6 relative">
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

          {/* Installed Apps */}
          <div className="flex flex-col gap-6">
            {sortedApps.map((app) => (
              <div
                key={app.id}
                className="flex flex-col md:flex-row justify-between items-center px-3 py-4 bg-white rounded-xl shadow w-full"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-20 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-center md:text-start">
                      {app.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-gray-600 items-center">
                      <div className="flex gap-2 items-center bg-green-100 px-2 py-1 rounded text-green-600">
                        <Download className="w-4 h-4" /> {app.downloads}
                      </div>
                      <div className="flex gap-2 items-center bg-orange-100 px-2 py-1 rounded text-orange-400">
                        <Star className="w-4 h-4" /> {app.ratingAvg}
                      </div>
                      <div>{app.size}MB</div>
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 mt-4 md:mt-0 bg-red-500 text-white rounded-lg cursor-not-allowed" disabled>
                  Installed
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default InstallationPage;
