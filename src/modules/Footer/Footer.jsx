import { useState, useContext } from "react";
import { ContextDevise } from "../../shared/components/Context/Context";

import css from "./Footer.module.css";

import { ReactComponent as Logo1 } from "../../images/svg/logo1.svg";
import { ReactComponent as Logo2 } from "../../images/svg/logo2.svg";
import { ReactComponent as BtnIcon } from "../../images/svg/arrowR.svg";
import { ReactComponent as Fb } from "../../images/svg/facebook.svg";
import { ReactComponent as Inst } from "../../images/svg/instagram.svg";

import RoundBtn from "../../shared/components/RoundBtn/RoundBtn";

const Footer = ({ scrollToContact }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile } = useContext(ContextDevise);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className={css.container}>
      <div
        className={css.logoContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? <Logo2 /> : <Logo1 />}
        {!isMobile && (
          <div className={css.socialWrapper}>
            <a href="" className={css.socialLink}>
              <Fb className={css.iconSocial} />
            </a>
            <a href="" className={css.socialLink}>
              <Inst className={css.iconSocial} />
            </a>
          </div>
        )}

        <RoundBtn customStyles={css.customBtn} onClick={scrollToContact}>
          <BtnIcon
            style={{ transform: "rotate(270deg)" }}
            className={css.customBtnIcon}
          />
        </RoundBtn>
      </div>

      {isMobile && (
        <div className={css.socialWrapper}>
          <a href="" className={css.socialLink}>
            <Fb className={css.iconSocial} />
          </a>
          <a href="" className={css.socialLink}>
            <Inst className={css.iconSocial} />
          </a>
        </div>
      )}
      <address>
        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.address}>
              79005, Ukraine, Lviv, street. Shota Rustaveli, 7
            </p>
          </li>
          <li className={css.item}>
            <a href="mailto:office@ecosolution.com" className={css.link}>
              office@ecosolution.com
            </a>
          </li>
          <li>2023 &copy;ecosolution</li>
        </ul>
      </address>
    </div>
  );
};

export default Footer;
