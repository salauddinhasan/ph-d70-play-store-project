import React from "react";
import { useParams } from "react-router";
import useAppsData from "../hooks/useAppsData";
import { FaArrowAltCircleDown, FaStar, FaDownload } from "react-icons/fa";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const AppDetails = () => {
  const { id } = useParams();
  const [data] = useAppsData();
  const app = data.find((item) => item.id === parseInt(id));

  if (!app) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-950">
        <span className="loading loading-spinner loading-lg text-red-500"></span>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen p-5 md:p-10 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Section: Header & Quick Stats */}
        <div className="bg-gray-900/50 border border-gray-800 p-6 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl mb-8">
          <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
            {/* App Image wrapper */}
            <div className="w-44 h-44 bg-gray-800 rounded-3xl flex items-center justify-center p-4 shadow-inner border border-gray-700">
              <img
                src={app.image}
                alt={app.title}
                className="max-h-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Info and Stats */}
            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                    {app.title}
                  </h1>
                  <p className="text-red-500 font-medium mt-1">
                    Developed by : {app.companyName || "Productive.io"}
                  </p>
                </div>
                <button className="btn btn-error text-white px-8 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-red-500/20">
                  <FaDownload /> Install Now (291 MB)
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-800">
                <div className="text-center">
                  <FaArrowAltCircleDown className="mx-auto text-xl text-gray-400 mb-2" />
                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    Downloads
                  </p>
                  <h2 className="text-xl font-bold">{app.downloads}</h2>
                </div>
                <div className="text-center border-x border-gray-800">
                  <FaStar className="mx-auto text-xl text-yellow-400 mb-2" />
                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    Ratings
                  </p>
                  <h2 className="text-xl font-bold">{app.ratingAvg}</h2>
                </div>
                <div className="text-center">
                  <BsFillHandThumbsUpFill className="mx-auto text-xl text-blue-400 mb-2" />
                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    Reviews
                  </p>
                  <h2 className="text-xl font-bold">54K</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Description */}
          <div className="lg:col-span-2 bg-gray-900/40 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-red-500 rounded-full"></span>{" "}
              Description
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              {app.description ||
                "This innovative application provides a seamless experience for users looking to boost their productivity and streamline their daily tasks. With an intuitive interface and powerful features, it stands out as a must-have tool in its category."}
            </p>
          </div>

          {/* Right: Ratings Breakdown */}
          <div className="bg-gray-900/40 border border-gray-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">Ratings & Reviews</h2>
            <div className="space-y-4">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-4">
                  <span className="text-sm font-bold w-4">{star}</span>
                  <progress
                    className="progress progress-error w-full h-3 bg-gray-800"
                    value={star === 5 ? 85 : star === 4 ? 60 : 20}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800 text-center">
              <h3 className="text-4xl font-black">{app.ratingAvg}</h3>
              <div className="flex justify-center text-yellow-400 my-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-500 text-sm">Average user rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
