import AppBar from "../AppBar/AppBar";

import { useRef } from "react";

import Main from "../Main/Main";
import About from "../About/About";
import Electricity from "../Electricity/Electricity";
import Cases from "../Cases/Cases";
import Questions from "../Questions/Questions";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Layout = () => {
  const contactSectionRef = useRef(null);

  function scrollToContactSection() {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <>
      <AppBar scrollToContact={() => scrollToContactSection()} />
      <main className="container">
        <Main />
        <About />
        <Electricity />
        <Cases />
        <Questions scrollToContact={() => scrollToContactSection()} />
        <Contact contactSectionRef={contactSectionRef} />
      </main>
      <footer className="container">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
