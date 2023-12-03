import css from "./slides.module.css";

import RoundBtn from "../RoundBtn/RoundBtn";
import { ReactComponent as Btn } from "../../../images/svg/arrow-right.svg";
import img1 from "../../../images/jpeg/img1.jpeg";
import img2 from "../../../images/jpeg/img2.jpeg";
import img3 from "../../../images/jpeg/img3.jpeg";
import img4 from "../../../images/jpeg/img4.jpeg";
import img5 from "../../../images/jpeg/img5.jpeg";

const slides = [
  {
    content: (
      <div className={css.slideContent}>
        <div className={css.thumb}>
          <img src={img1} alt="Windmills" className={css.picture} />
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
          <img src={img2} alt="Solar Panels" className={css.picture} />
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
          <img src={img3} alt="Thermal modules" className={css.picture} />
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
          <img src={img4} alt="" className={css.picture} />
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
          <img src={img5} alt="Mini nuclear stations" className={css.picture} />
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
