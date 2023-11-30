import { useState, useEffect } from "react";
import css from "./Electricity.module.css";

const Electricity = () => {
  const counterValue = 1134147814;

  const storedCounterValue = localStorage.getItem("counterValue");

  const initialCounterValue = storedCounterValue
    ? JSON.parse(storedCounterValue)
    : counterValue;

  const [currentNumber, setCurrentNumber] = useState(initialCounterValue);

  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  useEffect(() => {
    function updateCounter() {
      setCurrentNumber((prevNumber) => prevNumber + 1);

      const updatedNumber = currentNumber + 1;

      document.getElementById("counter").textContent =
        formatNumber(updatedNumber);

      localStorage.setItem("counterValue", JSON.stringify(updatedNumber));
    }

    const intervalId = setInterval(updateCounter, 1000);

    return () => clearInterval(intervalId);
  }, [currentNumber]);

  return (
    <section className={css.container} id="service">
      <h2 className={css.title}>Electricity we produced for all time</h2>
      <div className={css.counterWrapper}>
        <h3 id="counter" className={css.timer}>
          {formatNumber(currentNumber)}
        </h3>
        <span className={css.desc}>kWh</span>
      </div>
    </section>
  );
};

export default Electricity;
