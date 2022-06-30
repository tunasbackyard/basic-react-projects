import React, { useContext, useEffect, useReducer } from "react";
import data from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  data,
  totalAmount: 0,
  totalPrice: 0,
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getTotal();
  }, [state.data]);

  function clearChart() {
    dispatch({ type: "CLEAR_ITEMS" });
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  function increase(id) {
    dispatch({ type: "INCREASE", payload: id });
  }

  function decrease(id) {
    dispatch({ type: "DECREASE", payload: id });
  }

  function getTotal() {
    dispatch({ type: "GET_TOTAL" });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearChart,
        removeItem,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
