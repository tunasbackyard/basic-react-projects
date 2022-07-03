import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import data from "./data/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    data,
    currentIx: 0,
  });

  function handleIndex(fn) {
    let index = fn();
    index = index % state.data.length;
    if (index < 0) index = state.data.length - 1;
    dispatch({ type: "SET_IX", payload: { index } });
  }

  function isActiveSlide(itemIx) {
    return itemIx === state.currentIx;
  }

  function isLastSlide(itemIx) {
    return itemIx === state.currentIx - 1;
  }

  function isEndOfTheSlide(itemIx) {
    return state.currentIx === 0 && itemIx === data.length - 1;
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleIndex,
        isActiveSlide,
        isLastSlide,
        isEndOfTheSlide,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
