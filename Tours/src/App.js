import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tour from "./Tour";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchTours() {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const fetchedTours = await response.json();
      setIsLoading(false);
      setTours(fetchedTours);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <section className="wrapper">
      <h1>Tours</h1>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} />;
      })}
    </section>
  );
}

export default App;
