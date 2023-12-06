import PropTypes from 'prop-types';
import { ReactComponent as Menu } from "../../../../images/svg/menu.svg";

import css from "./BurgerBtn.module.css";

const BurgerBtn = ({ propIsModalOpen }) => {
  const handleClick = () => {
    propIsModalOpen(true);
  };

  return (
    <button type="button" className={css.btn} onClick={handleClick}>
      <Menu />
    </button>
  );
};

BurgerBtn.propTypes = {
  propIsModalOpen: PropTypes.func.isRequired,
};

export default BurgerBtn;
