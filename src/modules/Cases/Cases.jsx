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

export default Cases;
