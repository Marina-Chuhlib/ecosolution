import Slider from "../../shared/components/Slider/Slider";

import css from "./Cases.module.css";

const Cases = () => {
  return (
    <section id="cases" className={css.container}>
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
