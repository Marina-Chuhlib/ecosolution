import { useState, useEffect } from "react";

import { ReactComponent as Icon } from "../../images/arrow-right.svg";
import { ReactComponent as FaceB } from "../../images/facebook.svg";
import { ReactComponent as Inst } from "../../images/instagram.svg";
import { ReactComponent as FaceBH } from "../../images/facebook-h.svg";
import { ReactComponent as InstH } from "../../images/instagram-h.svg";

import css from "./NavBar.module.css";

const NavBar = () => {
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

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const getLinkClassName = (link) =>
    `${css.link} ${activeLink === link ? css.active : ""}`;

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
            <a href="#" className={css.link}>
              Cases
              <Icon className={css.icon} />
            </a>
          </li>
          <li className={css.item}>
            <a href="#" className={css.link}>
              FAQ
              <Icon className={css.icon} />
            </a>
          </li>
          <li className={css.item}>
            <a href="#" className={css.link}>
              Customers
              <Icon className={css.icon} />
            </a>
          </li>
          <li className={css.item}>
            <a href="#" className={css.link}>
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
              href=""
              className={css.socialLink}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
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
              href=""
              className={css.socialLink}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
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

export default NavBar;
