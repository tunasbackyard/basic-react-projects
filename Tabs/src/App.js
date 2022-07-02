import React from "react";
import "./index.css";
import Viewer from "./components/Viewer";
import useFetch from "./useFetch";

const App = () => {
  const url = "https://course-api.com/react-tabs-project";
  const { isLoading, data } = useFetch(url);

  if (isLoading) return <div>Loading</div>;
  return (
    <main>
      <h1>Experience</h1>
      <Viewer data={data} />
    </main>
  );
};

export default App;
