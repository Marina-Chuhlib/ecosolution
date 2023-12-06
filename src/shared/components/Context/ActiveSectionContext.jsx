import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("");

  const setSection = (section) => {
    setActiveSection(section);
  };

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

ActiveSectionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return context;
};
