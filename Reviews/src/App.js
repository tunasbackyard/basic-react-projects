import React from "react";
import List from "./components/List";

const App = () => {
  return (
    <main className="text-gray-600">
      <h1 className="flex mx-auto my-10 w-fit text-3xl font-semibold">
        Reviews
      </h1>
      <section className="relative w-3/4 mx-auto  my-20 px-8 py-8 border-t-2 border-blue-500 rounded-xl shadow-md">
        <List />
      </section>
    </main>
  );
};

export default App;
