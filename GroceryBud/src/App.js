import React, { useEffect, useState } from "react";
import Form from "./Form";

const App = () => {
  const [data, setData] = useState(getLocalStorage());
  function getLocalStorage() {
    return JSON.parse(localStorage.getItem("array")) || [];
  }

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(data));
  });

  return (
    <main>
      <section className="wrapper">
        <Form data={data} setData={setData} />
      </section>
    </main>
  );
};

export default App;
