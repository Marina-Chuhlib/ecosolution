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
  const { activeSection, setSection } = useActiveSection();

  const scrollToContactSection = () => {
    if (contactSectionRef.current) {
      const offsetTop = contactSectionRef.current.offsetTop - 140;

      window.scrollTo({
        behavior: "smooth",
        top: offsetTop,
      });
    }
  };

  const scrollToCasesSection = () => {
    if (casesSectionRef.current) {
      const offsetTop = casesSectionRef.current.offsetTop - 140;
      window.scrollTo({
        behavior: "smooth",
        top: offsetTop,
        block: "start",
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
      <AppBar scrollToContact={() => scrollToContactSection()} />
      <main className="container">
        <Main scrollToSection={() => scrollToCasesSection()} />
        <About />
        <Electricity />
        <Cases casesSectionRef={casesSectionRef} />
        <Questions scrollToContact={() => scrollToContactSection()} />
        <Contact contactSectionRef={contactSectionRef} />
      </main>
      <footer className="container">
        <Footer scrollToContact={() => scrollToContactSection()} />
      </footer>
    </>
  );
};

export default Layout;
