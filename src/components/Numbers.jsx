import React from "react";

const Numbers = () => {
  return (
    <section className="text-center bg-gradient-to-r from-purple-900 to-purple-600 text-white py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Trusted by Millions, Built for You
      </h2>

      <div className="flex flex-col md:flex-row justify-around items-center gap-10 max-w-5xl mx-auto">
        <div>
          <p className="text-gray-200">Total Downloads</p>
          <h1 className="text-5xl font-bold my-3">29.6M</h1>
          <p className="text-sm opacity-80">21% More Than Last Month</p>
        </div>

        <div>
          <p className="text-gray-200">Active Users</p>
          <h1 className="text-5xl font-bold my-3">4.8M</h1>
          <p className="text-sm opacity-80">18% Growth This Quarter</p>
        </div>

        <div>
          <p className="text-gray-200">Positive Reviews</p>
          <h1 className="text-5xl font-bold my-3">96%</h1>
          <p className="text-sm opacity-80">Across All Platforms</p>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
