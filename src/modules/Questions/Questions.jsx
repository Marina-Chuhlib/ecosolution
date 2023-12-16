import { useState, useContext } from "react";
import PropTypes from "prop-types";

import data from "./question.json";

import { ContextDevise } from "../../shared/components/Context/DeviseContext";
import DropdownList from "../../shared/components/DropdownList/DropdownList";

import GetInBtn from "../../shared/components/Buttons/GetInBtn/GetInBtn";

import css from "./Questions.module.css";

const Questions = ({ scrollToSection }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const { isMobile } = useContext(ContextDevise);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const { questionsData } = data;

  return (
    <section id="questions" className={css.container}>
      {isMobile && (
        <>
          <h2 className={css.title}>Frequently Asked Questions</h2>
          <ul className={css.list}>
            {questionsData &&
              questionsData.map((question, index) => (
                <li key={index} className={css.item}>
                  <DropdownList
                    title={question.title}
                    isOpen={openIndex === index}
                    toggleDropdown={() => handleToggle(index)}
                  >
                    {question.content}
                  </DropdownList>
                </li>
              ))}
          </ul>
          <div className={css.infoContainer}>
            <p className={css.answer}>
              Didn't find the answer to your question?
            </p>
            <GetInBtn onClick={scrollToSection}>Contact Us</GetInBtn>
          </div>
        </>
      )}

      {!isMobile && (
        <div className={css.wrapper}>
          <ul className={css.list}>
            {questionsData &&
              questionsData.map((question, index) => (
                <li key={index} className={css.item}>
                  <DropdownList
                    title={question.title}
                    isOpen={openIndex === index}
                    toggleDropdown={() => handleToggle(index)}
                  >
                    {question.content}
                  </DropdownList>
                </li>
              ))}
          </ul>
          <div className={css.titleWrapper}>
            <h2 className={css.title}>Frequently Asked Questions</h2>
            <div className={css.infoContainer}>
              <p className={css.answer}>
                Didn't find the answer to your question?
              </p>
              <GetInBtn onClick={scrollToSection}>Contact Us</GetInBtn>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

Questions.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Questions;
