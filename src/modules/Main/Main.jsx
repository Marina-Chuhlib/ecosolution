import { useContext } from "react";
import PropTypes from "prop-types";

import { ContextDevise } from "../../shared/components/Context/DeviseContext";
import LearnMoreBtn from "../../shared/components/Buttons/LearnMoreBtn/LearnMoreBtn";
import mainImg from "../../images/jpeg/main.jpeg";
import mainImg2x from "../../images/jpeg/main2x.jpg";

import css from "./Main.module.css";

const Main = ({ scrollToSection, mainSectionRef }) => {
  const { isMobile } = useContext(ContextDevise);

  return (
    <section className={css.container} id="main" ref={mainSectionRef}>
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
        <a
          className={css.address}
          title="Google Maps"
          target="_blank"
          rel="noopener noreferrer"
          href="https://maps.app.goo.gl/sSrphhDReJyqCXAg6"
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
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
            sizes="(min-width: 601px) 50vw, 100vw"
          />
        </picture>
      </div>
    </section>
  );
};

Main.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Main;
