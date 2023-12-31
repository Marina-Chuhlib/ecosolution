import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useActiveSection } from "../../shared/components/Context/ActiveSectionContext";

import { ReactComponent as Icon } from "../../images/svg/arrow-right.svg";
import { ReactComponent as FaceB } from "../../images/svg/facebook.svg";
import { ReactComponent as Inst } from "../../images/svg/instagram.svg";
import { ReactComponent as FaceBH } from "../../images/svg/facebook-h.svg";
import { ReactComponent as InstH } from "../../images/svg/instagram-h.svg";

import css from "./NavBar.module.css";

const NavBar = ({ closeModal }) => {
  const { activeSection } = useActiveSection();

  const [activeLink, setActiveLink] = useState("");
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substr(1);
      setActiveLink(hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const clickHandler = function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop - 150;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      const hash = href.substr(1);
      setActiveLink(hash);

      closeModal();
    };

    links.forEach((link) => {
      link.addEventListener("click", clickHandler);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", clickHandler);
      });
    };
  }, [closeModal]);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const getLinkClassName = (link) =>
    `${css.link} ${activeSection === link ? css.active : ""}`;

  return (
    <div className={css.wrapper}>
      <nav>
        <ul className={css.list}>
          <li className={css.item}>
            <a href="#main" className={getLinkClassName("main")}>
              Main
              <Icon className={css.icon} />
            </a>
          </li>
          <li className={css.item}>
            <a href="#about" className={getLinkClassName("about")}>
              About
              <Icon className={css.icon} />
            </a>
          </li>
          <li className={css.item}>
            <a href="#service" className={getLinkClassName("service")}>
              Service
              <Icon className={css.icon} />
            </a>
          </li>
          <li className={css.item}>
            <a href="#cases" className={getLinkClassName("cases")}>
              Cases
              <Icon className={css.icon} />
            </a>
          </li>
          <li className={css.item}>
            <a href="#questions" className={getLinkClassName("questions")}>
              FAQ
              <Icon className={css.icon} />
            </a>
          </li>
          <li className={css.item}>
            <a href="#contact" className={getLinkClassName("contact")}>
              Contact Us
              <Icon className={css.icon} />
            </a>
          </li>
        </ul>
      </nav>
      <div className={css.socialLinkContainer}>
        <ul className={css.socialLinkList}>
          <li>
            <a
              href="#contact"
              className={css.socialLink}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              aria-label="Visit our Facebook page"
              title="Visit our Facebook page"
              target="_blank"
              rel="noopener noreferrer"
            >
              {isHovered === 0 ? (
                <FaceBH className={css.socialIcon} />
              ) : (
                <FaceB className={css.socialIcon} />
              )}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={css.socialLink}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              aria-label="Visit our Instagram profile"
              title="Visit our Instagram profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              {isHovered === 1 ? (
                <InstH className={css.socialIcon} />
              ) : (
                <Inst className={css.socialIcon} />
              )}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default NavBar;
