import { useState } from "react";

import { ReactComponent as AddIcon } from "../../../images/svg/add.svg";
import { ReactComponent as HideIcon } from "../../../images/svg/minus.svg";

import css from "./DropdownList.module.css";

const DropdownList = ({ title, children ,isOpen,toggleDropdown }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <div className={css.dropdownItem}>
      <div className={css.titleWrapper}>
        <button type="button" className={css.btn} onClick={toggleDropdown}>
          {isOpen ? <HideIcon /> : <AddIcon />}
        </button>
        <h3 className={css.title}>{title}</h3>
      </div>

      {isOpen && <p className={css.content}>{children}</p>}
    </div>
  );
};

export default DropdownList;
