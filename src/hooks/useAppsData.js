import React, { useEffect, useState } from "react";

const useAppsData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return  [data];
};

export default useAppsData;
