import React, { useEffect, useState } from "react";
import Dialog from "./components/Dialog";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [people, setPeople] = useState([]);
  return (
    <div>
      <Dialog />
      <Form
        addPerson={(newPerson) => {
          setPeople([...people, { id: newPerson.id, name: newPerson.name }]);
        }}
      />
      <List array={people} />
    </div>
  );
};

export default App;
