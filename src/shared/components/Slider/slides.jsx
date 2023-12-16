import RoundBtn from "../Buttons/RoundBtn/RoundBtn";
import { ReactComponent as Btn } from "../../../images/svg/arrow-right.svg";
import img1 from "../../../images/jpeg/img1.jpeg";
import img1_2x from "../../../images/jpeg/img1-2x.jpeg";
import img2 from "../../../images/jpeg/img2.jpeg";
import img2_2x from "../../../images/jpeg/img2-2x.jpeg";
import img3 from "../../../images/jpeg/img3.jpeg";
import img3_2x from "../../../images/jpeg/img3-2x.jpeg";
import img4 from "../../../images/jpeg/img4.jpeg";
import img4_2x from "../../../images/jpeg/img4-2x.jpeg";
import img5 from "../../../images/jpeg/img5.jpeg";
import img5_2x from "../../../images/jpeg/img5-2x.jpeg";

import css from "./slides.module.css";

const slides = [
  {
    content: (
      <div className={css.slideContent}>
        <div className={css.thumb}>
          <picture>
            <source srcSet={`${img1} 1x, ${img1_2x} 2x`} />
            <img
              src={img1}
              className={css.picture}
              alt="Windmills"
              loading="lazy"
            />
          </picture>
        </div>
        <div className={css.contentWrapper}>
          <ul className={css.list}>
            <li className={css.item}>
              <p className={css.caption}>
                Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
              </p>
              <RoundBtn customStyles={css.itemBtn}>
                <Btn className={css.itemIcon} />
              </RoundBtn>
            </li>
            <li className={css.item}>
              <p className={css.text}>Wind Power for auto field irrigation</p>
              <p className={css.text}>July 2023</p>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className={css.slideContent}>
        <div className={css.thumb}>
          <picture>
            <source srcSet={`${img2} 1x, ${img2_2x} 2x`} />
            <img
              src={img2}
              className={css.picture}
              alt="Solar Panels"
              loading="lazy"
            />
          </picture>
        </div>
        <div className={css.contentWrapper}>
          <ul className={css.list}>
            <li className={css.item}>
              <p className={css.caption}>
                Zhytomyr city Private Enterprise “Bosch”
              </p>
              <RoundBtn customStyles={css.itemBtn}>
                <Btn className={css.itemIcon} />
              </RoundBtn>
            </li>
            <li className={css.item}>
              <p className={css.text}>Solar Panels for industrial use</p>
              <p className={css.text}>November 2023</p>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className={css.slideContent}>
        <div className={css.thumb}>
          <picture>
            <source srcSet={`${img3} 1x, ${img3_2x} 2x`} />
            <img
              src={img3}
              className={css.picture}
              alt="Thermal modules"
              loading="lazy"
            />
          </picture>
        </div>
        <div className={css.contentWrapper}>
          <ul className={css.list}>
            <li className={css.item}>
              <p className={css.caption}>
                Rivne city Private Enterprise “Biotech”
              </p>
              <RoundBtn customStyles={css.itemBtn}>
                <Btn className={css.itemIcon} />
              </RoundBtn>
            </li>
            <li className={css.item}>
              <p className={css.text}>Thermal modules</p>
              <p className={css.text}>October 2023</p>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className={css.slideContent}>
        <div className={css.thumb}>
          <picture>
            <source srcSet={`${img4} 1x, ${img4_2x} 2x`} />
            <img
              src={img4}
              className={css.picture}
              alt="Kherson Windmills"
              loading="lazy"
            />
          </picture>
        </div>
        <div className={css.contentWrapper}>
          <ul className={css.list}>
            <li className={css.item}>
              <p className={css.caption}>
                Kherson city Private Enterprise “HealthyFarm”
              </p>
              <RoundBtn customStyles={css.itemBtn}>
                <Btn className={css.itemIcon} />
              </RoundBtn>
            </li>
            <li className={css.item}>
              <p className={css.text}>Wind power</p>
              <p className={css.text}>September 2021</p>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className={css.slideContent}>
        <div className={css.thumb}>
          <picture>
            <source srcSet={`${img5} 1x, ${img5_2x} 2x`} />
            <img
              src={img5}
              className={css.picture}
              alt="Mini nuclear stations"
              loading="lazy"
            />
          </picture>
        </div>
        <div className={css.contentWrapper}>
          <ul className={css.list}>
            <li className={css.item}>
              <p className={css.caption}>
                Zaporizhia city Private Enterprise “Biotech”
              </p>
              <RoundBtn customStyles={css.itemBtn}>
                <Btn className={css.itemIcon} />
              </RoundBtn>
            </li>
            <li className={css.item}>
              <p className={css.text}>Mini nuclear stations</p>
              <p className={css.text}>May 2021</p>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default slides;
