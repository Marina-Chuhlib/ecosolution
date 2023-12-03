import { ReactComponent as LearnBtn } from "../../../images/svg/learnBtn.svg";

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

// YourComponent.propTypes = {
//   children: PropTypes.node,
//   customStyles: PropTypes.string,
// };

export default LearnMoreBtn;
