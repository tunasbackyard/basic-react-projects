import React, { useEffect, useState } from "react";
import TabViewer from "./TabViewer";

import "./index.css";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://course-api.com/react-tabs-project";

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const fetchedData = await response.json();
      setData(fetchedData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    // fetchData();
  }, []);

  if (isLoading) return <div>Loading</div>;

  // console.log(data);
  return (
    <main>
      <h1>Experience</h1>
      <TabViewer />
    </main>
  );
};

export default App;
