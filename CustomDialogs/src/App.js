import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

export const Context = React.createContext();

const App = () => {
  const [people, setPeople] = useState([]);

  return (
    <main>
      <Context.Provider
        value={{
          addPerson: (newPerson) => {
            setPeople([...people, { id: newPerson.id, name: newPerson.name }]);
          },
          people,
        }}
      >
        <Form />
        <List />
      </Context.Provider>
    </main>
  );
};

export default App;
