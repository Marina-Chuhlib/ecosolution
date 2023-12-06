import PropTypes from 'prop-types';

import { ReactComponent as LearnBtn } from "../../../../images/svg/learnBtn.svg";

import css from "./LearnMoreBtn.module.css";

const LearnMoreBtn = ({ children, type = "button", customStyles, onClick }) => {
  const defaultStyles = css.btn;

  const combinedStyles = `${defaultStyles} ${customStyles || ""}`;

  return (
    <button type={type} className={combinedStyles} onClick={onClick}>
      {children}
      <LearnBtn />
    </button>
  );
};

LearnMoreBtn.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  customStyles: PropTypes.string,
  onClick: PropTypes.func,
};

export default LearnMoreBtn;
