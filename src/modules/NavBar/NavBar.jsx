import { useState, useEffect } from "react";

import css from "./NavBar.module.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substr(1); //
      setActiveLink(hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const getLinkClassName = (link) =>
    `${css.link} ${activeLink === link ? css.active : ""}`;

  return (
    <nav>
      <ul className={css.list}>
        <li className={css.item}>
          <a href="#main" className={getLinkClassName("main")}>
            Main
          </a>
        </li>
        <li className={css.item}>
          <a href="#about" className={getLinkClassName("about")}>
            About
          </a>
        </li>
        <li className={css.item}>
          <a href="#service" className={getLinkClassName("service")}>
            Service
          </a>
        </li>
        <li className={css.item}>
          <a href="#" className={css.link}>
            Cases
          </a>
        </li>
        <li className={css.item}>
          <a href="#" className={css.link}>
            FAQ
          </a>
        </li>
        <li className={css.item}>
          <a href="#" className={css.link}>
            Customers
          </a>
        </li>
        <li className={css.item}>
          <a href="#" className={css.link}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
