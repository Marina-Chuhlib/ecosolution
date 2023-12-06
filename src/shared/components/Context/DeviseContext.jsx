import React, { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const ContextDevise = createContext();

const DeviseContextProvider = ({ children }) => {
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

DeviseContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeviseContextProvider;
