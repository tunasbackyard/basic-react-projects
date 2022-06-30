import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    number: 0,
  });

  function increase() {
    dispatch({ type: "INC" });
  }

  function decrease() {
    dispatch({ type: "DEC" });
  }

  function reset() {
    dispatch({ type: "RESET" });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        increase,
        decrease,
        reset,
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
