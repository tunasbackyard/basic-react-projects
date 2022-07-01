import React from "react";
import { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    data: [],
  });

  function setData(data) {
    dispatch({ type: "SET_DATA", payload: { data } });
  }

  function stopLoading() {
    dispatch({ type: "STOP_LOADING" });
  }

  function removeData(id) {
    dispatch({ type: "REMOVE_DATA", payload: { id } });
  }

  return (
    <AppContext.Provider value={{ ...state, setData, stopLoading, removeData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
