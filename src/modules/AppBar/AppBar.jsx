import { useState, useEffect, useContext } from "react";

import PropTypes from "prop-types";

import { ContextDevise } from "../../shared/components/Context/DeviseContext";

import Modal from "../../shared/components/Modal/Modal";
import BurgerBtn from "../../shared/components/Buttons/BurgerBtn/BurgerBtn";
import GetInBtn from "../../shared/components/Buttons/GetInBtn/GetInBtn";
import NavBar from "../NavBar/NavBar";

import { ReactComponent as Logo1 } from "../../images/svg/logo1.svg";
import { ReactComponent as Logo2 } from "../../images/svg/logo2.svg";

import css from "./AppBar.module.css";

const AppBar = ({ scrollToSection }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile } = useContext(ContextDevise);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className={`${css.header} ${isScrolling ? css.scrolled : ""}`}>
      <a
        href="#"
        className={css.logoContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? <Logo2 /> : <Logo1 />}
      </a>
      <div className={css.btnContainer}>
        <BurgerBtn propIsModalOpen={openModal} />
        {!isMobile && (
          <div className={css.getInBtn}>
            <GetInBtn onClick={scrollToSection}>Get in touch</GetInBtn>
          </div>
        )}
      </div>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          children={<NavBar closeModal={closeModal} />}
        />
      )}
    </header>
  );
};

AppBar.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default AppBar;
