import React from "react";
import Alert from "./components/Alert";
import Loader from "./components/Loader";
import Tour from "./components/Tour";
import { useGlobalContext } from "./context";
import useFetch from "./useFetch";

const App = () => {
  const url = "https://course-api.com/react-tours-project";
  const { isLoading, isRemoved, data, removeData } = useGlobalContext();

  useFetch(url);

  if (isLoading) return <Loader />;

  return (
    <section className="w-fit mx-auto max-w-screen-md text-slate-700 text-center">
      <h1 className="mt-5 text-5xl font-bold">Tours</h1>
      {data.map((tour) => {
        return <Tour key={tour.id} {...tour} removeData={removeData} />;
      })}
      {isRemoved && <Alert text="Tour Removed" />}
    </section>
  );
};

export default App;
