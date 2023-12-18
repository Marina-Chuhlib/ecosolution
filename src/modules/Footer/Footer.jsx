import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { ContextDevise } from "../../shared/components/Context/DeviseContext";

import { ReactComponent as Logo1 } from "../../images/svg/logo1.svg";
import { ReactComponent as Logo2 } from "../../images/svg/logo2.svg";
import { ReactComponent as BtnIcon } from "../../images/svg/arrowR.svg";
import { ReactComponent as Fb } from "../../images/svg/facebook.svg";
import { ReactComponent as Inst } from "../../images/svg/instagram.svg";

import css from "./Footer.module.css";

const Footer = ({ scrollToSection, mainSectionRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { isMobile } = useContext(ContextDevise);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={css.container}>
      <div className={css.logoContainer}>
        <a
          href="#"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {isHovered || isFocused ? <Logo2 /> : <Logo1 />}
        </a>

        {!isMobile && (
          <div className={css.socialWrapper}>
            <a
              href="#"
              className={css.socialLink}
              aria-label="Visit our Facebook page"
              title="Visit our Facebook page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fb className={css.iconSocial} />
            </a>
            <a
              href="#"
              className={css.socialLink}
              aria-label="Visit our Instagram profile"
              title="Visit our Instagram profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Inst className={css.iconSocial} />
            </a>
          </div>
        )}

        <a
          href="#main"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(mainSectionRef);
          }}
          className={css.customBtn}
          aria-label="Go to Main"
        >
          <BtnIcon
            style={{ transform: "rotate(270deg)" }}
            className={css.customBtnIcon}
          />
        </a>
      </div>

      {isMobile && (
        <div className={css.socialWrapper}>
          <a
            href="#"
            className={css.socialLink}
            aria-label="Visit our Facebook page"
            title="Visit our Facebook page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fb className={css.iconSocial} />
          </a>
          <a
            href="#"
            className={css.socialLink}
            aria-label="Visit our Instagram profile"
            title="Visit our Instagram profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Inst className={css.iconSocial} />
          </a>
        </div>
      )}
      <address>
        <ul className={css.list}>
          <li className={css.item}>
            <a
              className={css.address}
              title="Google Maps"
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/sSrphhDReJyqCXAg6"
            >
              79005, Ukraine, Lviv, street. Shota Rustaveli, 7
            </a>
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
  scrollToSection: PropTypes.func.isRequired,
};

export default Footer;
