import React, { useReducer, useContext } from "react";
import { reducer } from "./reducer";
import data from "./data/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    data,
    categories: ["all", ...new Set(data.map((item) => item.category))],
    currentFilter: "all",
  });

  function changeFilter(filter) {
    dispatch({ type: "CHANGE_FILTER", payload: { filter } });
  }

  return (
    <AppContext.Provider value={{ ...state, changeFilter }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
