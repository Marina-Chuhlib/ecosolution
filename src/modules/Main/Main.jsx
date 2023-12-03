import { useContext } from "react";
import { ContextDevise } from "../../shared/components/Context/DeviseContext";
import LearnMoreBtn from "../../shared/components/LearnMoreBtn/LearnMoreBtn";
import mainImg from "../../images/jpeg/main.jpg";
import mainImg2x from "../../images/jpeg/main2x.jpg";

import css from "./Main.module.css";

const Main = ({ scrollToSection }) => {
  const { isMobile } = useContext(ContextDevise);

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

          <LearnMoreBtn onClick={scrollToSection}>Learn more</LearnMoreBtn>
        </div>
      </div>
      <address className={css.addressWrapper}>
        <p className={css.address}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
        <div className={css.addressLink}>
          <a href="mailto:office@ecosolution.com" className={css.link}>
            office@ecosolution.com
          </a>
          {!isMobile && <p>2023 &copy;ecosolution</p>}
        </div>
      </address>
      <div className={css.thumb}>
        <picture>
          <source srcSet={`${mainImg} 1x, ${mainImg2x} 2x`} />
          <img
            src={mainImg}
            className={css.mainImg}
            alt="Wind generator"
            width="1240"
            height="524"
          />
        </picture>
      </div>
    </section>
  );
};

export default Main;
