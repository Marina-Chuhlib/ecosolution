import PropTypes from "prop-types";
import { ReactComponent as Menu } from "../../../../images/svg/menu.svg";

import css from "./BurgerBtn.module.css";

const BurgerBtn = ({ propIsModalOpen, ariaLabel }) => {
  const handleClick = () => {
    propIsModalOpen(true);
  };

  return (
    <button
      type="button"
      className={css.btn}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      <Menu />
    </button>
  );
};

BurgerBtn.propTypes = {
  propIsModalOpen: PropTypes.func.isRequired,
};

export default BurgerBtn;
