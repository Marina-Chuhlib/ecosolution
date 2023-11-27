import { useState, useEffect } from "react";

import BurgerBtn from "../../shared/components/BurgerBtn/BurgerBtn";
import GetInBtn from "../../shared/components/GetInBtn/GetInBtn";
import NavBar from "../NavBar/NavBar";

import { ReactComponent as Logo1 } from "../../images/logo1.svg";
import { ReactComponent as Logo2 } from "../../images/logo2.svg";

import css from "./AppBar.module.css";
import Modal from "../../shared/components/Modal/Modal";

const AppBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
    console.log("open");
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className={css.header}>
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
