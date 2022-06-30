import React from "react";
import { useReducer, useContext } from "react";

import data from "./local/data";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    data,
  });

  function reset() {
    dispatch({ type: "RESET" });
  }

  return (
    <AppContext.Provider value={{ ...state, reset }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
