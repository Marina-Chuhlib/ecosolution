import PropTypes from "prop-types";

import Slider from "../../shared/components/Slider/Slider";

import css from "./Cases.module.css";

const Cases = ({ casesSectionRef }) => {
  return (
    <section id="cases" ref={casesSectionRef} className={css.container}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Successful cases of our company</h2>
      </div>

      <div>
        <Slider />
      </div>
    </section>
  );
};

Cases.propTypes = {
  casesSectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default Cases;
