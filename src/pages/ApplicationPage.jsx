import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Download, Star, ThumbsUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplicationPage = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    fetch("/allApps.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((item) => item.id === parseInt(id));
        setApp(foundApp);

        const installedApps =
          JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalled(installedApps.some((a) => a.id === foundApp?.id));
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleInstall = () => {
    setInstalled(true);
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.some((a) => a.id === app.id)) {
      localStorage.setItem(
        "installedApps",
        JSON.stringify([...installedApps, app])
      );
    }
    toast.success(`${app.title} installed successfully!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  if (loading)
    return (
      <p className="text-center py-10 font-bold text-3xl">
        <span className="loading loading-spinner text-primary"></span>
        Loading...
      </p>
    );

  if (!app)
    return (
      <p className="text-center text-gray-500 mt-10 text-lg">App not found</p>
    );

  const chartData = app.ratings
    .slice()
    .reverse()
    .map((r) => ({ name: r.name, count: r.count }));

  return (
    <div className="max-w-[1400px] mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          className="w-full max-w-[280px] h-[280px] object-cover rounded-2xl"
          src={app.image}
          alt={app.title}
        />
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold">{app.title}</h2>
          <h3 className="text-lg md:text-xl mt-2 mb-3">
            Developed By:{" "}
            <span className="text-purple-700">{app.companyName}</span>
          </h3>
          <hr className="text-gray-400" />

          <div className="mt-3 flex flex-wrap gap-6 md:gap-20">
            <div className="flex flex-col items-center">
              <Download size={30} strokeWidth={3} className="text-green-500" />
              <h2 className="text-sm md:text-base text-gray-500 font-semibold mt-2">
                Downloads
              </h2>
              <h1 className="text-2xl md:text-3xl font-bold mt-1">
                {app.downloads}
              </h1>
            </div>

            <div className="flex flex-col items-center">
              <Star size={30} strokeWidth={3} className="text-orange-300" />
              <h2 className="text-sm md:text-base text-gray-500 font-semibold mt-2">
                Average Ratings
              </h2>
              <h1 className="text-2xl md:text-3xl font-bold mt-1">
                {app.ratingAvg}
              </h1>
            </div>

            <div className="flex flex-col items-center">
              <ThumbsUp size={30} strokeWidth={3} className="text-purple-500" />
              <h2 className="text-sm md:text-base text-gray-500 font-semibold mt-2">
                Total Reviews
              </h2>
              <h1 className="text-2xl md:text-3xl font-bold mt-1">
                {app.reviews}
              </h1>
            </div>
          </div>

          <button
            className={`mt-5 px-8 py-2 text-xl rounded-lg font-semibold ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00d390] text-white"
            }`}
            disabled={installed}
            onClick={handleInstall}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-5">Ratings Breakdown</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <XAxis
              type="number"
              tickFormatter={(v) => v.toLocaleString()}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: "#555" }}
              width={50}
            />
            <Bar
              dataKey="count"
              fill="#FF9800"
              barSize={25}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-20">
        <h1 className="text-2xl mb-5">Description</h1>
        {app.descriptions.map((desc, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {desc}
          </p>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default ApplicationPage;
