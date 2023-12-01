import Form from "../Form/Form";

import { ReactComponent as Mail } from "../../images/svg/sms.svg";
import { ReactComponent as Phone } from "../../images/svg/call.svg";
import { ReactComponent as Map } from "../../images/svg/map.svg";

import { ReactComponent as Fb } from "../../images/svg/facebook.svg";
import { ReactComponent as Inst } from "../../images/svg/instagram.svg";

import css from "./Contact.module.css";

const Contact = ({ contactSectionRef }) => {
  return (
    <section id="contact" ref={contactSectionRef} className={css.container}>
      <h2 className={css.title}>Contact us</h2>
      <div className={css.wrapper}>
        <div className={css.contacts}>
          <ul className={css.list}>
            <li className={css.item}>
              Phone:
              <div className={css.phoneWrapper}>
                <a href="tel:+380981234567" className={css.link}>
                  <Phone className={css.iconLink} /> 38 (098) 12 34 567
                </a>
                <a href="tel:+380931234567" className={css.link}>
                  <Phone className={css.iconLink} /> 38 (098) 12 34 567
                </a>
              </div>
            </li>
            <li className={css.item}>
              E-mail:
              <a href="mailto:office@ecosolution.com" className={css.link}>
                <Mail className={css.iconLink} /> office@ecosolution.com
              </a>
            </li>
            <li className={css.item}>
              Address:
              <address className={css.address}>
                <Map />
                <span className={css.text}>
                  79005, Ukraine, Lviv, street. Shota Rustaveli, 7
                </span>
              </address>
            </li>
            <li className={css.item}>
              Social Networks:
              <div className={css.socialWrapper}>
                <a href="" className={css.socialLink}>
                  <Fb className={css.iconSocial} />
                </a>
                <a href="" className={css.socialLink}>
                  <Inst className={css.iconSocial} />
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className={css.formContainer}>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
