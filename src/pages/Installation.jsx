import React, { useState } from "react";
import TrendingAppStore from "../hompage/TrendingAppStore";
import { FaTrashAlt } from "react-icons/fa";

const Installation = () => {
  // ১. Lazy Initializer ব্যবহার করে লোকাল স্টোরেজ থেকে ডাটা লোড
  const [installedApps, setInstalledApps] = useState(() => {
    const localData = localStorage.getItem("installed-apps");
    return localData ? JSON.parse(localData) : [];
  });

  // ২. নির্দিষ্ট অ্যাপ রিমুভ করার ফাংশন
  const handleRemove = (id) => {
    const remainingApps = installedApps.filter((app) => app.id !== id);
    // লোকাল স্টোরেজ আপডেট
    localStorage.setItem("installed-apps", JSON.stringify(remainingApps));
    // স্টেট আপডেট (এতে লাল দাগ চলে যাবে এবং সাথে সাথে রিমুভ হবে)
    setInstalledApps(remainingApps);
  };

  // ৩. সব অ্যাপ একসাথে রিমুভ করার ফাংশন (ঐচ্ছিক)
  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear the entire queue?")) {
      localStorage.removeItem("installed-apps");
      setInstalledApps([]);
    }
  };

  return (
    <div className="bg-gray-950 min-h-screen p-5 md:p-10 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10 border-b border-gray-800 pb-5">
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
            My <span className="text-red-500">Installation</span> Queue
          </h1>

          {installedApps.length > 0 && (
            <button
              onClick={clearAll}
              className="btn btn-sm btn-outline btn-error rounded-xl normal-case"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Apps Grid */}
        {installedApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {installedApps.map((app) => (
              <div key={app.id} className="relative group">
                {/* কার্ড কম্পোনেন্ট */}
                <TrendingAppStore app={app} />

                {/* Remove Button (Hover করলে বড় হবে) */}
                <button
                  onClick={() => handleRemove(app.id)}
                  className="absolute -top-3 -right-3 bg-red-600 hover:bg-red-700 text-white w-9 h-9 rounded-full shadow-xl flex items-center justify-center transition-all active:scale-90 z-20 border-2 border-gray-950 group-hover:scale-110"
                  title="Remove App"
                >
                  <FaTrashAlt size={14} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-32 bg-gray-900/20 border-2 border-dashed border-gray-800 rounded-[3rem]">
            <div className="bg-gray-800 p-6 rounded-full mb-5 opacity-20">
              <FaTrashAlt size={50} />
            </div>
            <p className="text-gray-500 text-xl font-medium italic">
              Your installation queue is empty...
            </p>
            <button
              onClick={() => window.history.back()}
              className="mt-6 text-red-500 hover:underline font-semibold"
            >
              Go Back to Store
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
