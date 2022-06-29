import React, { useContext } from "react";
import data from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
