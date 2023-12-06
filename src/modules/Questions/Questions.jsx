import { useState, useContext } from "react";
import PropTypes from 'prop-types';

import { ContextDevise } from "../../shared/components/Context/DeviseContext";
import DropdownList from "../../shared/components/DropdownList/DropdownList";

import GetInBtn from "../../shared/components/Buttons/GetInBtn/GetInBtn";

import css from "./Questions.module.css";

const Questions = ({ scrollToContact }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const { isMobile } = useContext(ContextDevise);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const questionsData = [
    {
      title:
        "How do wind turbines and solar panels work together in a renewable energy system?",
      content:
        "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    },
    {
      title:
        "What sets EcoSolution's renewable energy solutions apart from others on the market?",
      content:
        "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    },
    {
      title:
        "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
      content:
        "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    },
    {
      title:
        "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
      content:
        "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    },
    {
      title:
        "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
      content:
        "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    },
  ];

  return (
    <section id="questions" className={css.container}>
      {isMobile && (
        <>
          <h2 className={css.title}>Frequently Asked Questions</h2>
          <ul className={css.list}>
            {questionsData.map((question, index) => (
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
            <GetInBtn onClick={scrollToContact}>Contact Us</GetInBtn>
          </div>
        </>
      )}

      {!isMobile && (
        <div className={css.wrapper}>
          <ul className={css.list}>
            {questionsData.map((question, index) => (
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
              <GetInBtn onClick={scrollToContact}>Contact Us</GetInBtn>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

Questions.propTypes = {
  scrollToContact: PropTypes.func.isRequired,
};

export default Questions;
