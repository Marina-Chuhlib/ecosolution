import { useRef, useEffect } from "react";

import css from "./Contact.module.css";

const Contact = ({ contactSectionRef }) => {
  return (
    <section id="contact" ref={contactSectionRef} className={css.container}>
      <h2>Contact us</h2>
    </section>
  );
};

export default Contact;
