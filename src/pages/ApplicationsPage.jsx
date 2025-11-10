import React, { useEffect, useState } from "react";
import { Download, Star } from "lucide-react";
import { useNavigate } from "react-router-dom"; 

const ApplicationsPage = () => {
  const [appsData, setAppsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("/allApps.json")
      .then((res) => res.json())
      .then((data) => setAppsData(data))
      .finally(() => setLoading(false));
  }, []);

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <p className="text-center py-10 font-bold text-3xl">
        <span className="loading loading-spinner text-primary"></span>
        Loading...
      </p>
    );

  // অ্যাপ পাওয়া না গেলে /no-apps রাউটে পাঠানো
  if (filteredApps.length === 0) {
    navigate("/no-apps", { replace: true });
    return null;
  }

  return (
    <div className="mb-8">
      <h1 className="text-center mt-15 text-5xl font-bold">
        Our All Applications
      </h1>
      <p className="text-center mt-4 mb-15 text-xl text-gray-600">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between mb-3">
          <h3 className="text-2xl font-semibold">
            ({filteredApps.length}) Apps Found
          </h3>

          <label className="input flex items-center border-purple-300 px-3 py-2 rounded-lg bg-white">
            <svg
              className="h-[1.5em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              className="text-xl ml-2 outline-none"
              type="search"
              placeholder="Search apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              onClick={() => navigate(`/apps/${app.id}`)} 
              className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition cursor-pointer hover:scale-105"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-70 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 mt-5">{app.title}</h3>

              <div className="flex justify-between mt-5">
                <div className="flex gap-3 btn text-green-600 bg-green-100 text-l">
                  <Download />
                  <p>{app.downloads}</p>
                </div>
                <div className="flex gap-3 btn text-orange-400 bg-orange-100 text-l">
                  <Star />
                  <p>{app.ratingAvg}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
