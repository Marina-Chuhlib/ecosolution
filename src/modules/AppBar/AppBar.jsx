import { useState, useEffect, useContext } from "react";

import { ContextDevise } from "../../shared/components/Context/Context";

import BurgerBtn from "../../shared/components/BurgerBtn/BurgerBtn";
import GetInBtn from "../../shared/components/GetInBtn/GetInBtn";
import NavBar from "../NavBar/NavBar";

import { ReactComponent as Logo1 } from "../../images/svg/logo1.svg";
import { ReactComponent as Logo2 } from "../../images/svg/logo2.svg";

import css from "./AppBar.module.css";
import Modal from "../../shared/components/Modal/Modal";

const AppBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  const { isMobile } = useContext(ContextDevise);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // const handleResize = () => {
    //   const updatedIsMobile = window.innerWidth <= 767;
    //   setIsMobile(updatedIsMobile);
    //   localStorage.setItem("isMobile", JSON.stringify(updatedIsMobile));
    // };

    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    // handleResize();
    handleScroll();

    // window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      // window.removeEventListener("resize", handleResize);
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
    <header className={`${css.header} ${isScrolled ? css.scrolled : ""}`}>
      <div
        className={css.logoContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? <Logo2 /> : <Logo1 />}
      </div>
      <div className={css.btnContainer}>
        <BurgerBtn propIsModalOpen={openModal} />
        {!isMobile && <GetInBtn />}
      </div>
      {isModalOpen && <Modal closeModal={closeModal} children={<NavBar />} />}
    </header>
  );
};

export default AppBar;
