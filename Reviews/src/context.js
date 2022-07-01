import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import data from "./local/data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    data,
    currentIx: 0,
  });

  function showNext() {
    dispatch({ type: "NEXT" });
  }
  function showPrev() {
    dispatch({ type: "PREV" });
  }
  function showRandom() {
    dispatch({ type: "RANDOM" });
  }

  return (
    <AppContext.Provider value={{ ...state, showNext, showPrev, showRandom }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
