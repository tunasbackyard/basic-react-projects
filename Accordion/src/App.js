import React from "react";
import List from "./components/List";

const App = () => {
  return (
    <main className="h-screen bg-slate-800 py-5 overflow-hidden text-slate-300">
      <h2 className="w-fit mx-auto text-2xl font-semibold">FAQ</h2>
      <List />
    </main>
  );
};

export default App;
