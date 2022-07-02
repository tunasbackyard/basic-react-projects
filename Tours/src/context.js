import React from "react";
import { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isRemoved: false,
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

  function showAlert() {
    dispatch({ type: "ALERT" });
  }

  function hideAlert() {
    dispatch({ type: "HIDE_ALERT" });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        setData,
        stopLoading,
        removeData,
        showAlert,
        hideAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
