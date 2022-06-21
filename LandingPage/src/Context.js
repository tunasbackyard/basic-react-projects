import React, { useContext, useState } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function openSubmenu() {
    setIsSubmenuOpen(true);
  }

  function closeSubmenu() {
    setIsSubmenuOpen(false);
  }

  function getCurrentLinkIndex(ix) {
    setCurrentLinkIndex(ix);
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        sublinks,
        currentLinkIndex,
        setCurrentLinkIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
