import { useState, useEffect } from "react";
import LearnMoreBtn from "../../shared/components/LearnMoreBtn/LearnMoreBtn";
import mainImg from "../../images/main.jpg";
import mainImg2x from "../../images/main2x.jpg";

import css from "./Main.module.css";

const Main = () => {
  const isRetina = window.devicePixelRatio > 1;

  const imgSrc1x = mainImg;
  const imgSrc2x = isRetina ? mainImg2x : null;

  //     const [isMobile, setIsMobile] = useState(false);

  //   useEffect(() => {
  //       const isMobileStored = localStorage.getItem("isMobile");
  //       console.log(isMobileStored)
  //     if (isMobileStored) {
  //       setIsMobile(JSON.parse(isMobileStored));
  //     }
  //   }, []);

  return (
    <section className={css.container} id="main">
      <div className={css.wrapper}>
        <h1 className={css.title}>RENEWABLE ENERGY For any task</h1>
        <div className={css.contentWrapper}>
          <p className={css.text}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <LearnMoreBtn />
        </div>
      </div>
      <div className={css.addressWrapper}>
        <address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</address>
        <div className={css.addressLink}>
          <a href="mailto:office@ecosolution.com" className={css.link}>
            office@ecosolution.com
          </a>
          <p>2023 &copy;ecosolution</p>
        </div>
      </div>
      <div className={css.thumb}>
        <picture>
          <source
            // media="(min-width: 1200px)"
            srcSet={`${mainImg} 1x, ${mainImg2x} 2x`}
          />

          <img
            src={mainImg}
            className={css.mainImg}
            alt=""
            width="1240"
            height="524"
          />
        </picture>
      </div>
    </section>
  );
};

export default Main;
