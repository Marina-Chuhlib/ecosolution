import { useState } from "react";
import PropTypes from 'prop-types';

import { ReactComponent as Ellipse1 } from "../../../../images/svg/ellipse1.svg";
import { ReactComponent as Ellipse2 } from "../../../../images/svg/ellipse2.svg";

import css from "./GetInBtn.module.css";

const GetInBtn = ({ children, onClick, type = "button" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      type={type}
      className={css.btn}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
      {isHovered ? <Ellipse2 /> : <Ellipse1 />}
    </button>
  );
};

GetInBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default GetInBtn;
