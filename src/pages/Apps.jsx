import useAppsData from "../hooks/useAppsData";

const Apps = () => {
  const [data] = useAppsData();

  return (
    <div className="bg-gray-950 min-h-screen p-10">
      <h2 className="text-3xl font-bold text-white text-center mb-10 uppercase tracking-widest">
        All <span className="text-red-500">Apps</span>
      </h2>

      {/* Grid Container: ekhane grid-cols-3 add kora hoyeche */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((app) => (
          <div
            key={app.id}
            className="bg-gray-900 border border-gray-800 rounded-2xl hover:border-red-500/40 hover:-translate-y-2 transition-all duration-300 p-5 shadow-xl"
          >
            {/* Image Section */}
            <div className="h-44 flex items-center justify-center bg-gray-800/50 rounded-xl mb-5">
              <img
                src={app.image}
                alt={app.title}
                className="h-32 object-contain rounded-lg drop-shadow-2xl"
              />
            </div>

            {/* App Info */}
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {app.title}
              </h3>
              <p className="text-sm text-gray-400 font-medium">
                {app.companyName}
              </p>
            </div>

            {/* Stats: Rating & Downloads */}
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-800">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">⭐</span>
                <span className="text-white font-bold">{app.ratingAvg}</span>
              </div>
              <span className="text-xs text-gray-500 font-semibold bg-gray-800 px-2 py-1 rounded-md">
                {app.downloads} Downloads
              </span>
            </div>

            {/* Action Button */}
            <button className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-red-500/20">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
