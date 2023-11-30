import { useState } from "react";
import { ReactComponent as Ellipse1 } from "../../../images/svg/ellipse1.svg";
import { ReactComponent as Ellipse2 } from "../../../images/svg/ellipse2.svg";

import css from "./GetInBtn.module.css";

const GetInBtn = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <button
        type="button"
        className={css.btn}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        Get in touch
        {isHovered ? (
          <Ellipse2  />
        ) : (
          <Ellipse1  />
        )}
      </button>
    </>
  );
};

export default GetInBtn;
