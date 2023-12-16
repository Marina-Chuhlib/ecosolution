import PropTypes from "prop-types";

import { ReactComponent as AddIcon } from "../../../images/svg/add.svg";
import { ReactComponent as HideIcon } from "../../../images/svg/minus.svg";

import css from "./DropdownList.module.css";

const DropdownList = ({ title, children, isOpen, toggleDropdown }) => {
  return (
    <div className={css.dropdownItem}>
      <div className={css.titleWrapper}>
        <button
          type="button"
          className={css.btn}
          onClick={toggleDropdown}
          aria-label={isOpen ? "Hide Content" : "Show Content"}
        >
          {isOpen ? (
            <HideIcon className={css.hideIcon} />
          ) : (
            <AddIcon className={css.showIcon} />
          )}
        </button>
        <h3 className={css.title}>{title}</h3>
      </div>

      {isOpen && <p className={css.content}>{children}</p>}
    </div>
  );
};

DropdownList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

export default DropdownList;
