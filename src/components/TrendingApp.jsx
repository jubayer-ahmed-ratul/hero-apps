import React from "react";
import appsData from "../../public/topApps.json"
import { Download } from "lucide-react";
import { Star } from "lucide-react";
const TrendingApp = () => {
  return (
    <section className=" py-20 max-w-[1400px] mx-auto flex flex-col items-center">
      <h2 className="text-5xl text-center font-semibold mb-3">Trending Apps</h2>
      <p className="text-xl text-center text-gray-600 mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* apps container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {appsData.map((app) => (
          <div
            key={app.id}
            className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-70 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 mt-5">{app.title}</h3>

            <div className="flex justify-between mt-5">

               <div className="flex gap-3   btn text-green-600 bg-green-100 text-l"> 
                 <p><Download /></p>
                <p>{app.downloads}</p>
                </div>
               <div className="flex gap-3 btn text-orange-400 bg-orange-100 text-l "> 
                 <p><Star /></p>
                <p>{app.ratingAvg}</p>
                </div>
              
            </div>
          </div>
        ))}
      </div>

      <button className="btn text-white bg-linear-to-r from-purple-800 to-purple-600 px-8 py-6 text-lg gap-2 hover:scale-105 transition-all mt-10">
            Show ALL</button>


    </section>
  );
};

export default TrendingApp;
