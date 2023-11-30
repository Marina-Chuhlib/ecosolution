import img1 from "../../images/jpeg/img1.jpeg";

import css from "./Cases.module.css";

import RoundBtn from "../../shared/components/RoundBtn/RoundBtn";

import Slider from "../../shared/components/Slider/Slider";

const Cases = () => {
  return (
    <section id="cases" className={css.container}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Successful cases of our company</h2>
      </div>

      <div>
        {/* <ul className={css.list}>
          <li className={css.item}>
            <div className={css.thumb}>
              <img src={img1} alt="" className={css.picture} />
            </div>
            <div>
              <p>
                Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
              </p>
              <button>vv</button>
              <p>
                Wind Power for auto field irrigation <span>July 2023</span>
              </p>
            </div>
          </li>
        </ul> */}

        <Slider />
      </div>
    </section>
  );
};

export default Cases;
