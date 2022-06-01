import React, { useEffect, useState } from "react";

import "./index.css";
import Viewer from "./Viewer";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://course-api.com/react-tabs-project";
  async function fetchData() {
    try {
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

  return (
    <main>
      <h1>Experience</h1>
      <Viewer data={data} />
    </main>
  );
};

export default App;
