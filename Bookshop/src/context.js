import React from "react";
import { useContext } from "react";
import data from "./local/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
