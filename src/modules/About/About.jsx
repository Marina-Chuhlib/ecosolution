import * as React from "react";
import Box from "@mui/material/Box";

import { useContext } from "react";
import { ContextDevise } from "../../shared/components/Context/DeviseContext";

import grid1 from "../../images/jpeg/grid1.jpeg";
import grid2x from "../../images/jpeg/grid2x.jpeg";
import grid2 from "../../images/jpeg/grid.jpeg";
import grid2_2x from "../../images/jpeg/grid1-2x.jpeg";

import { ReactComponent as Icon1 } from "../../images/svg/maximize-circle.svg";
import { ReactComponent as Icon2 } from "../../images/svg/global-edit.svg";
import { ReactComponent as Icon3 } from "../../images/svg/cpu-charge.svg";
import { ReactComponent as Icon4 } from "../../images/svg/ranking.svg";

import css from "./About.module.css";

const About = () => {
  const { isMobile } = useContext(ContextDevise);

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

      {isMobile && (
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          className={css.boxGrid}
        >
          <Box gridColumn="span 1" className={css.boxGridItem}>
            <div className={css.item}>
              <h3 className={css.caption}>
                <Icon1 /> Openness
              </h3>
              <p className={css.content}>
                to the world, people, new ideas and projects
              </p>
            </div>
          </Box>
          <Box gridColumn="span 1" className={css.boxGridItem}>
            <div className={css.item}>
              <h3 className={css.caption}>
                <Icon2 />
                Responsibility
              </h3>
              <p className={css.content}>
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </p>
            </div>
          </Box>

          <Box gridColumn="span 1" className={css.boxGridItem}>
            <div className={css.item}>
              <h3 className={css.caption}>
                <Icon3 />
                Innovation
              </h3>
              <p className={css.content}>
                we use the latest technology to implement non-standard solutions
              </p>
            </div>
          </Box>
          <Box gridColumn="span 1" className={css.boxGridItem}>
            <div className={css.item}>
              <h3 className={css.caption}>
                <Icon4 />
                Quality
              </h3>
              <p className={css.content}>
                we do not strive to be the first among others, but we want to be
                the best in our business
              </p>
            </div>
          </Box>
        </Box>
      )}

      {!isMobile && (
        <Box
          display="grid"
          gridTemplateColumns="repeat(16, 1fr)"
          className={css.boxGrid}
        >
          <Box gridColumn="span 4" className={css.boxGridItem}>
            <div className={css.item}>
              <h3 className={css.caption}>
                <Icon1 className={css.icon} /> Openness
              </h3>
              <p className={css.content}>
                to the world, people, new ideas and projects
              </p>
            </div>
          </Box>
          <Box gridColumn="span 4" className={css.boxGridItem}>
            <div className={css.item}>
              <h3 className={css.caption}>
                <Icon2 className={css.icon} />
                Responsibility
              </h3>
              <p className={css.content}>
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </p>
            </div>
          </Box>

          <Box gridColumn="span 8">
            <div className={css.gridItem} style={{ padding: "0" }}>
              <picture>
                <source srcSet={`${grid1} 1x, ${grid2x} 2x`} />
                <img
                  src={grid1}
                  className={css.img}
                  alt="People and wind generator"
                  loading="lazy"
                />
              </picture>
            </div>
          </Box>

          <Box gridColumn="span 8">
            <div className={css.gridItem} style={{ padding: "0" }}>
              <picture>
                <source srcSet={`${grid2} 1x, ${grid2_2x} 2x`} />
                <img
                  src={grid2}
                  className={css.img}
                  alt="Man and solar panels"
                  loading="lazy"
                />
              </picture>
            </div>
          </Box>

          <Box gridColumn="span 4" className={css.boxGridItem}>
            <div className={css.item}>
              <h3 className={css.caption}>
                <Icon3 className={css.icon} />
                Innovation
              </h3>
              <p className={css.content}>
                we use the latest technology to implement non-standard solutions
              </p>
            </div>
          </Box>
          <Box gridColumn="span 4" className={css.boxGridItem}>
            <div className={css.item}>
              <h3 className={css.caption}>
                <Icon4 className={css.icon} />
                Quality
              </h3>
              <p className={css.content}>
                we do not strive to be the first among others, but we want to be
                the best in our business
              </p>
            </div>
          </Box>
        </Box>
      )}
    </section>
  );
};

export default About;
