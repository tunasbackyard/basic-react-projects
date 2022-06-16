import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [people, setPeople] = useState([]);

  return (
    <main>
      <Form
        addPerson={(newPerson) => {
          setPeople([...people, { id: newPerson.id, name: newPerson.name }]);
        }}
      />
      <List array={people} />
    </main>
  );
};

export default App;
