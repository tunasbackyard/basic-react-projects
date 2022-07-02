import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import useFetch from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const url = "https://course-api.com/react-tabs-project";
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    data: [],
    currentIx: 0,
  });
  const { isLoading, data } = useFetch(url);
  state.isLoading = isLoading;
  state.data = data;

  function setCurrentIx(order) {
    dispatch({ type: "SET_CURRENT", payload: { order } });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        setCurrentIx,
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
