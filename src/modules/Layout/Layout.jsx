import React, { useEffect, useRef } from "react";

import AppBar from "../AppBar/AppBar";

import { useActiveSection } from "../../shared/components/Context/ActiveSectionContext";

import Main from "../Main/Main";
import About from "../About/About";
import Electricity from "../Electricity/Electricity";
import Cases from "../Cases/Cases";
import Questions from "../Questions/Questions";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Layout = () => {
  const contactSectionRef = useRef(null);
  const casesSectionRef = useRef(null);
  const mainSectionRef = useRef(null);
  const { activeSection, setSection } = useActiveSection();

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      const offsetTop = sectionRef.current.offsetTop - 140;

      window.scrollTo({
        behavior: "smooth",
        top: offsetTop,
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [setSection]);

  return (
    <>
      <AppBar scrollToSection={() => scrollToSection(contactSectionRef)} />
      <main className="container">
        <Main
          scrollToSection={() => scrollToSection(casesSectionRef)}
          mainSectionRef={mainSectionRef}
        />
        <About />
        <Electricity />
        <Cases casesSectionRef={casesSectionRef} />
        <Questions scrollToSection={() => scrollToSection(contactSectionRef)} />
        <Contact contactSectionRef={contactSectionRef} />
      </main>
      <footer className="container">
        <Footer scrollToSection={() => scrollToSection(mainSectionRef)} />
      </footer>
    </>
  );
};

export default Layout;
