import grid1 from "../../images/jpeg/grid1.jpeg";
import grid2 from "../../images/jpeg/grid.jpeg";

import css from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={css.container}>
      <div className={css.contextWrapper}>
        <h2 className={css.title}>Main values of our company</h2>
        <p className={css.text}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </p>
      </div>

      <div className={css.listWrapper}>
        <ul className={css.gridList}>
          <li className={css.gridItem}>
            <h3>Openness</h3>
            <p>to the world, people, new ideas and projects</p>
          </li>
          <li className={css.gridItem}>
            <h3>Responsibility</h3>
            <p>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </li>
          <li className={css.gridItem}>
            <img src={grid1} alt="" className={css.img} />
          </li>
        </ul>

        <ul className={css.gridList}>
          <li className={css.gridItem}>
            <img src={grid2} alt="" className={css.img} />
          </li>
          <li className={css.gridItem}>
            <h3>Innovation</h3>
            <p>we use the latest technology to implement non-standard solutions</p>
          </li>
          <li className={css.gridItem}>
            <h3>Quality</h3>
            <p>
          we do not strive to be the first among others, but we want to be the best in our business
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
