import PropTypes from "prop-types";

import css from "./RoundBtn.module.css";

const RoundBtn = ({ onClick, ariaLabel, children, customStyles }) => {
  const defaultStyles = css.btn;

  const combinedStyles = `${defaultStyles} ${customStyles || ""}`;
  return (
    <button
      type="button"
      className={combinedStyles}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

RoundBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  customStyles: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default RoundBtn;
