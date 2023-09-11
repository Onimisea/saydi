"use client";

import { createContext, useState, useEffect } from "react";
import { useCycle } from "framer-motion";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [allOurStories, setAllOurStories] = useState(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    if (!allOurStories) {
      const fetchData = async () => {
        try {
          const response = await fetch("https://api.saydi.org/v1/contents/");
          const data = await response.json();
          // console.log(data)
          setAllOurStories(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [allOurStories]);

  return (
    <AppContext.Provider value={{ navOpen, setNavOpen, allOurStories }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
