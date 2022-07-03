import React from "react";
import "./index.css";
import { useGlobalContext } from "./context";

import List from "./components/List";
import Loading from "./components/Loading";

const App = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) return <Loading />;
  return (
    <main className="flex flex-col justify-start items-center bg-slate-800 text-slate-100 h-screen w-screen">
      <h1 className="text-3xl font-bold my-10">Experience</h1>
      <List />
    </main>
  );
};

export default App;
