import { useContext } from "react";
import { ContextDevise } from "../../shared/components/Context/Context";

import grid1 from "../../images/jpeg/grid1.jpeg";
import grid2 from "../../images/jpeg/grid.jpeg";

import { ReactComponent as Icon1 } from "../../images/svg/maximize-circle.svg";
import { ReactComponent as Icon2 } from "../../images/svg/global-edit.svg";
import { ReactComponent as Icon3 } from "../../images/svg/cpu-charge.svg";
import { ReactComponent as Icon4 } from "../../images/svg/ranking.svg";

import css from "./About.module.css";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

      {/* <div className={css.listWrapper}>
        <ul className={css.gridList1}>
          <li className={`${css.gridItem} ${css.colum}`}>
        
              <h3 className={css.caption}>
                <Icon1 /> Openness
              </h3>
              <p className={css.content}>
                to the world, people, new ideas and projects
              </p>
    
          </li>
          <li className={`${css.gridItem} ${css.colum}`}>
   
              <h3 className={css.caption}>
                <Icon2 />
                Responsibility
              </h3>

              <p className={css.content}>
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </p>
     
          </li>
          {!isMobile && (
            <li className={css.gridItem}>
              <img src={grid1} alt="" className={css.img} />
            </li>
          )}
        </ul>

        <ul className={css.gridList2}>
          {!isMobile && (
            <li className={css.gridItem}>
              <img src={grid2} alt="" className={css.img} />
            </li>
          )}
          <li className={`${css.gridItem} ${css.colum}`}>
    
              <h3 className={css.caption}>
                <Icon3 />
                Innovation
              </h3>
              <p className={css.content}>
                we use the latest technology to implement non-standard solutions
              </p>
 
          </li>
          <li className={`${css.gridItem} ${css.colum}`}>
        
              <h3 className={css.caption}>
                <Icon4 />
                Quality
              </h3>
              <p className={css.content}>
                we do not strive to be the first among others, but we want to be
                the best in our business
              </p>
   
          </li>
        </ul>
      </div> */}
      {/* 
    =====================  */}

      <div className={css.gridList1}>
        <div className={`${css.gridItem} ${css.colum}`}>
          <h3 className={css.caption}>
            <Icon1 /> Openness
          </h3>
          <p className={css.content}>
            to the world, people, new ideas and projects
          </p>
        </div>
        <div className={`${css.gridItem} ${css.colum}`}>
          <h3 className={css.caption}>
            <Icon2 />
            Responsibility
          </h3>

          <p className={css.content}>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </div>
        {!isMobile && (
          <div className={css.gridItem}>
            <img
              src={grid1}
              alt="People and wind generator"
              className={css.img}
            />
          </div>
        )}
      </div>
      <div className={css.gridListWrapper2}>
        <div className={css.gridList2}>
          {!isMobile && (
            <div className={css.gridItem}>
              <img src={grid2} alt="" className={css.img} />
            </div>
          )}
          <div className={`${css.gridItem2} ${css.colum}`}>
            <h3 className={css.caption}>
              <Icon3 />
              Innovation
            </h3>
            <p className={css.content}>
              we use the latest technology to implement non-standard solutions
            </p>
          </div>
          <div className={`${css.gridItem2} ${css.colum}`}>
            <h3 className={css.caption}>
              <Icon4 />
              Quality
            </h3>
            <p className={css.content}>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </div>
        </div>
      </div>

      {/* =====  grid !!!*/}
      
      {/* <Box display="grid" gridTemplateColumns="repeat(16, 1fr)" gap={2}>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 8">
          <Item>xs=8</Item>
        </Box>

        <Box gridColumn="span 8">
          <div className={css.gridItem}>
            <img src={grid2} alt="" className={css.img} />
          </div>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
      </Box> */}
      {/* ==== */}

      {/* <div className={css.gridListWrapper1}>
        <ul className={css.gridList1}>
          <li className={`${css.gridItem} ${css.colum}`}>
            <h3 className={css.caption}>
              <Icon1 /> Openness
            </h3>
            <p className={css.content}>
              to the world, people, new ideas and projects
            </p>
          </li>
          <li className={`${css.gridItem} ${css.colum}`}>
            <h3 className={css.caption}>
              <Icon2 />
              Responsibility
            </h3>

            <p className={css.content}>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </li>
          {!isMobile && (
            <li className={css.gridItem}>
              <img
                src={grid1}
                alt="People and wind generator"
                className={css.img}
              />
            </li>
          )}
        </ul>
      </div>

      <div className={css.gridListWrapper2}>
        <ul className={css.gridList2}>
          {!isMobile && (
            <li className={css.gridItem}>
              <img src={grid2} alt="Man and solar panels" className={css.img} />
            </li>
          )}
          <li className={`${css.gridItem} ${css.colum}`}>
            <h3 className={css.caption}>
              <Icon3 />
              Innovation
            </h3>
            <p className={css.content}>
              we use the latest technology to implement non-standard solutions
            </p>
          </li>
          <li className={`${css.gridItem} ${css.colum}`}>
            <h3 className={css.caption}>
              <Icon4 />
              Quality
            </h3>
            <p className={css.content}>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </li>
        </ul>
      </div> */}
    </section>
  );
};

export default About;
