import { useState } from "react";

import img1 from "../../../images/jpeg/img1.jpeg";
import img2 from "../../../images/jpeg/img2.jpeg";
import img3 from "../../../images/jpeg/img3.jpeg";
import img4 from "../../../images/jpeg/img4.jpeg";
import img5 from "../../../images/jpeg/img5.jpeg";
import { ReactComponent as Btn } from "../../../images/svg/arrow-right.svg";
import { ReactComponent as SliderBtn } from "../../../images/svg/arrowR.svg";

import css from "./Slider.module.css";
import RoundBtn from "../RoundBtn/RoundBtn";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerPage = 2;

  const slides = [
    {
      content: (
        <div className={css.slideContent}>
          <div className={css.thumb}>
            <img src={img1} alt="" className={css.picture} />
          </div>
          <div className={css.contentWrapper}>
            <ul className={css.list}>
              <li className={css.item}>
                <p className={css.caption}>
                  Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
                </p>
                <RoundBtn className={css.itemBtn}>
                  <Btn className={css.itemIcon} />
                </RoundBtn>
              </li>
              <li className={css.item}>
                <p className={css.text}>Wind Power for auto field irrigation</p>
                <p className={css.text}>July 2023</p>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className={css.slideContent}>
          <div className={css.thumb}>
            <img src={img2} alt="" className={css.picture} />
          </div>
          <div className={css.contentWrapper}>
            <ul className={css.list}>
              <li className={css.item}>
                <p className={css.caption}>Zhytomyr city Private Enterprise “Bosch”</p>
                <RoundBtn className={css.itemBtn}>
                  <Btn className={css.itemIcon} />
                </RoundBtn>
              </li>
              <li className={css.item}>
                <p className={css.text}>Solar Panels for industrial use</p>
                <p className={css.text}>November 2023</p>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className={css.slideContent}>
          <div className={css.thumb}>
            <img src={img3} alt="" className={css.picture} />
          </div>
          <div className={css.contentWrapper}>
            <ul className={css.list}>
              <li className={css.item}>
                <p className={css.caption}>Rivne city Private Enterprise “Biotech”</p>
                <RoundBtn className={css.itemBtn}>
                  <Btn className={css.itemIcon} />
                </RoundBtn>
              </li>
              <li className={css.item}>
                <p className={css.text}>Thermal modules</p>
                <p className={css.text}>October 2023</p>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className={css.slideContent}>
          <div className={css.thumb}>
            <img src={img4} alt="" className={css.picture} />
          </div>
          <div className={css.contentWrapper}>
            <ul className={css.list}>
              <li className={css.item}>
                <p className={css.caption}>Kherson city Private Enterprise “HealthyFarm”</p>
                <RoundBtn className={css.itemBtn}>
                  <Btn className={css.itemIcon} />
                </RoundBtn>
              </li>
              <li className={css.item}>
                <p className={css.text}>Wind power</p>
                <p className={css.text}>September 2021</p>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className={css.slideContent}>
          <div className={css.thumb}>
            <img src={img5} alt="" className={css.picture} />
          </div>
          <div className={css.contentWrapper}>
            <ul className={css.list}>
              <li className={css.item}>
                <p className={css.caption}>Zaporizhia city Private Enterprise “Biotech”</p>
                <RoundBtn className={css.itemBtn}>
                  <Btn className={css.itemIcon} />
                </RoundBtn>
              </li>
              <li className={css.item}>
                <p className={css.text}>Mini nuclear stations</p>
                <p className={css.text}>May 2021</p>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

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
    showSlide(currentIndex + 2);
  };

  const handlePrevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 2;
    showSlide(newIndex);
  };

  const formatSlideNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  return (
    <div className={css.sliderContainer}>
      <div className={css.slider}>
        {slides.slice(currentIndex, currentIndex + 2).map((slide, index) => (
          <div key={index} className={css.slide}>
            {slide.content}
          </div>
        ))}
          </div>
          
      <div className={css.btnContainer}>
        <RoundBtn onClick={handlePrevSlide} className={css.btn}>
          <SliderBtn
            style={{ transform: "rotate(180deg)" }}
            className={css.icon}
          />
        </RoundBtn>
        <RoundBtn onClick={handleNextSlide} className={css.btn}>
          <SliderBtn className={css.icon} />
        </RoundBtn>
      </div>
    </div>
  );
};

export default Slider;
