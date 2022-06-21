import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Tour from "./components/Tour";

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

  function removeTour(id) {
    const filteredTours = tours.filter((tour) => tour.id !== id);
    setTours(filteredTours);
  }

  if (isLoading) return <Loader />;

  return (
    <section className="w-fit mx-auto max-w-screen-md text-slate-700 text-center">
      <h1 className="mt-5 text-5xl font-bold">Tours</h1>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </section>
  );
}

export default App;
