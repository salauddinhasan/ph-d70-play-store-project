import { useEffect, useState } from "react";

const TrendingApps = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="px-5 py-14 bg-gray-950">
      <div className=" container mx-auto  rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-white flex justify-center gap-2 pb-5">
           Trending Apps
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {data.map((app) => (
            <div
              key={app.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 p-4"
            >
              {/* Image */}
              <div className="h-40 flex items-center justify-center bg-gray-800 rounded-xl mb-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-28 object-contain rounded-lg"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-white">{app.title}</h3>
              <p className="text-sm text-gray-500">{app.companyName}</p>

              {/* Rating */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-yellow-400 font-medium">
                  ⭐ {app.ratingAvg}
                </span>
                <span className="text-sm text-gray-500">
                  {app.downloads} downloads
                </span>
              </div>

              {/* Button */}
              <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-semibold transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
