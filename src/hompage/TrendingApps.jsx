import TrendingAppStore from "./TrendingAppStore";
import { Link } from "react-router";
import App from "../App";
import useAppsData from "../hooks/useAppsData";

const TrendingApps = () => {
  const [data] = useAppsData();

  return (
    <div className="px-5 py-14 bg-gray-950">
      <div className="max-w-7xl mx-auto  rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-white flex justify-center gap-2 pb-5">
          Trending Apps
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {data.slice(0, 9).map((app, id) => (
            <div key={id}>
              <TrendingAppStore app={app} />
            </div>
          ))}
        </div>
      </div>

      <Link to="/apps" className="flex justify-center pt-14">
        <button className="btn btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:border-red-500 px-10 rounded-full hover:text-white font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-500/10">
          Show All Apps
        </button>
      </Link>
    </div>
  );
};

export default TrendingApps;
