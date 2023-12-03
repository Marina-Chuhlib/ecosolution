import { useState, useEffect, useContext } from "react";

import { ContextDevise } from "../../shared/components/Context/DeviseContext";

import Modal from "../../shared/components/Modal/Modal";
import BurgerBtn from "../../shared/components/BurgerBtn/BurgerBtn";
import GetInBtn from "../../shared/components/GetInBtn/GetInBtn";
import NavBar from "../NavBar/NavBar";

import { ReactComponent as Logo1 } from "../../images/svg/logo1.svg";
import { ReactComponent as Logo2 } from "../../images/svg/logo2.svg";

import css from "./AppBar.module.css";

const AppBar = ({ scrollToContact }) => {
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
      <div
        className={css.logoContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? <Logo2 /> : <Logo1 />}
      </div>
      <div className={css.btnContainer}>
        <BurgerBtn propIsModalOpen={openModal} />
        {!isMobile && (
          <GetInBtn onClick={scrollToContact}>Get in touch</GetInBtn>
        )}
      </div>
      {isModalOpen && <Modal closeModal={closeModal} children={<NavBar />} />}
    </header>
  );
};

export default AppBar;
