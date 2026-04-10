import React from "react";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import heroImg from "../assets/hero.png";
import TrendingApps from "./TrendingApps";

const HomePage = () => {
  return (
    <div>
      <div className="bg-gray-950 text-white ">
        {/* Hero Header Section */}
        <section className="pt-20 pb-10 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl  font-extrabold tracking-tight text-white">
              We Build <br />
              <span className="text-red-500">Productive</span> Apps
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              At <span className="text-white font-semibold">HERO.IO</span>, we
              craft innovative apps designed to make everyday life simpler,
              smarter, and more exciting.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4 items-center justify-center pt-6">
              <button className="btn btn-outline border-gray-700 hover:bg-white hover:text-black text-white px-8 rounded-full flex gap-3 transition-all duration-300">
                <FaGooglePlay className="text-xl" />
                <div className="text-left">
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </button>

              <button className="btn btn-outline border-gray-700 hover:bg-white hover:text-black text-white px-8 rounded-full flex gap-3 transition-all duration-300">
                <FaAppStoreIos className="text-xl" />
                <div className="text-left">
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Hero Image Section with Glow */}
        <section className="relative max-w-5xl mx-auto px-6 py-10">
          <div className="absolute inset-0 bg-red-500/10 blur-[120px] rounded-full"></div>
          <div className="relative border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={heroImg}
              alt="App Mockup"
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by Millions,{" "}
            <span className="text-red-500">Built for You</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat Card 1 */}
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 text-center hover:border-red-500/50 transition-colors group">
              <p className="text-gray-500 font-medium mb-2 uppercase tracking-widest text-xs">
                Total Downloads
              </p>
              <h2 className="text-5xl font-black text-white group-hover:text-red-500 transition-colors">
                29.6M
              </h2>
              <p className="text-green-500 text-sm mt-3 font-semibold">
                {" "}
                21% more than last month
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 text-center hover:border-red-500/50 transition-colors group">
              <p className="text-gray-500 font-medium mb-2 uppercase tracking-widest text-xs">
                Total Reviews
              </p>
              <h2 className="text-5xl font-black text-white group-hover:text-red-500 transition-colors">
                906K
              </h2>
              <p className="text-green-500 text-sm mt-3 font-semibold">
                {" "}
                46% more than last month
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 text-center hover:border-red-500/50 transition-colors group">
              <p className="text-gray-500 font-medium mb-2 uppercase tracking-widest text-xs">
                Active Apps
              </p>
              <h2 className="text-5xl font-black text-white group-hover:text-red-500 transition-colors">
                132+
              </h2>
              <p className="text-blue-400 text-sm mt-3 font-semibold">
                31 more will Launch
              </p>
            </div>
          </div>
        </section>
      </div>

      <TrendingApps />
    </div>
  );
};

export default HomePage;
