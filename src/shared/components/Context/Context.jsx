import React, { createContext, useState, useEffect } from "react";

export const ContextDevise = createContext();

const ContextProvider = ({ children }) => {
  const storedIsMobile = localStorage.getItem("isMobile");
  const initialIsMobile = storedIsMobile ? JSON.parse(storedIsMobile) : false;

  const [isMobile, setIsMobile] = useState(initialIsMobile);

  const updateIsMobile = () => {
    const updatedIsMobile = window.innerWidth <= 767;

    localStorage.setItem("isMobile", JSON.stringify(updatedIsMobile));
    setIsMobile(updatedIsMobile);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  return (
    <ContextDevise.Provider value={{ isMobile }}>
      {children}
    </ContextDevise.Provider>
  );
};

export default ContextProvider;
