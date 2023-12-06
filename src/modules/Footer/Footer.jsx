import { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { ContextDevise } from "../../shared/components/Context/DeviseContext";

import RoundBtn from "../../shared/components/Buttons/RoundBtn/RoundBtn";

import { ReactComponent as Logo1 } from "../../images/svg/logo1.svg";
import { ReactComponent as Logo2 } from "../../images/svg/logo2.svg";
import { ReactComponent as BtnIcon } from "../../images/svg/arrowR.svg";
import { ReactComponent as Fb } from "../../images/svg/facebook.svg";
import { ReactComponent as Inst } from "../../images/svg/instagram.svg";

import css from "./Footer.module.css";

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
      <div className={css.logoContainer}>
        <a
          href="#"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered ? <Logo2 /> : <Logo1 />}
        </a>

        {!isMobile && (
          <div className={css.socialWrapper}>
            <a href="#" className={css.socialLink}>
              <Fb className={css.iconSocial} />
            </a>
            <a href="#" className={css.socialLink}>
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

Footer.propTypes = {
  scrollToContact: PropTypes.func.isRequired,
};

export default Footer;
