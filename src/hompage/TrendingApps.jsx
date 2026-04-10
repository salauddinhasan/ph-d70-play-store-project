import { useEffect, useState } from "react";
import TrendingAppStore from "./TrendingAppStore";

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
            <TrendingAppStore app={app}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
