import React, { useState, useContext, useRef } from "react";

import { ContextDevise } from "../Context/DeviseContext";

import { ReactComponent as SliderBtn } from "../../../images/svg/arrowR.svg";
import RoundBtn from "../Buttons/RoundBtn/RoundBtn";

import slides from "./slides";

import css from "./Slider.module.css";

const Slider = () => {
  const { isMobile } = useContext(ContextDevise);
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(null);
  const sliderRef = useRef(null);

  const showSlide = (index) => {
    if (index >= slides.length) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(slides.length - 2);
    } else {
      setCurrentIndex(index);
    }
  };

  const handleNextSlide = () => {
    showSlide(isMobile ? currentIndex + 1 : currentIndex + (isMobile ? 1 : 2));
  };

  const handlePrevSlide = () => {
    showSlide(
      isMobile
        ? currentIndex === 0
          ? slides.length - 1
          : currentIndex - 1
        : currentIndex === 0
        ? slides.length - 1
        : currentIndex - 2
    );
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!startX.current) return;
    const x = e.touches[0].clientX - startX.current;
    if (Math.abs(x) > 50) {
      if (x > 0) {
        handlePrevSlide();
      } else {
        handleNextSlide();
      }
      startX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    startX.current = null;
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    startX.current = e.clientX;

    const handleMouseMove = (moveEvent) => {
      const x = moveEvent.clientX - startX.current;

      if (Math.abs(x) > 50) {
        if (x > 0) {
          handlePrevSlide();
        } else {
          handleNextSlide();
        }

        startX.current = moveEvent.clientX;
      }
    };

    const handleMouseUp = () => {
      startX.current = null;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const formatSlideNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  return (
    <div
      className={css.sliderContainer}
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
    >
      <div className={css.slider}>
        {isMobile
          ? slides.slice(currentIndex, currentIndex + 1).map((slide, index) => (
              <div key={index} className={css.slide}>
                {slide.content}
              </div>
            ))
          : slides.slice(currentIndex, currentIndex + 2).map((slide, index) => (
              <div key={index} className={css.slide}>
                {slide.content}
              </div>
            ))}
      </div>

      <div className={css.btnContainer}>
        <RoundBtn onClick={handlePrevSlide} customStyles={css.customBtn}>
          <SliderBtn
            style={{ transform: "rotate(180deg)" }}
            className={css.icon}
          />
        </RoundBtn>
        <RoundBtn onClick={handleNextSlide} customStyles={css.customBtn}>
          <SliderBtn className={css.icon} />
        </RoundBtn>
      </div>
      {isMobile && (
        <p className={css.page}>
          {formatSlideNumber(currentIndex + 1)}
          <span className={css.desc}>/{formatSlideNumber(slides.length)}</span>
        </p>
      )}
      {!isMobile && (
        <p className={css.page}>
          {currentIndex + 1 === slides.length ? (
            <>
              {formatSlideNumber(slides.length)}
              <span className={css.desc}>/05</span>
            </>
          ) : (
            <>
              {formatSlideNumber(currentIndex + 2)}
              <span className={css.desc}>/05</span>
            </>
          )}
        </p>
      )}
    </div>
  );
};

export default Slider;
