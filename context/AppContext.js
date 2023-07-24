"use client";

import { createContext, useState } from "react";
import { useCycle } from "framer-motion";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <AppContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
