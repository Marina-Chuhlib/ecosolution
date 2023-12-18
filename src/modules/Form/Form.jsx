import { useState } from "react";

import { toast } from "react-toastify";

import LearnMoreBtn from "../../shared/components/Buttons/LearnMoreBtn/LearnMoreBtn";

import css from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    phone: true,
  });

  const errors = {
    name: "Wrong Fullname",
    email: "Wrong Email",
    phone: "Wrong Phone",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedIsValid = {
      name: /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/.test(formData.name),
      email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(
        formData.email
      ),
      phone: /^[0-9]{12,}$/.test(formData.phone),
    };

    setIsValid(updatedIsValid);

    if (!isValidForm(updatedIsValid)) {
      toast.error("Please fill out the form correctly.", {
        style: {
          background: "#d28b8b",
          color: "#173d33",
          borderRadius: "50px",
        },
      });

      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    toast.success("🦄 Form submitted successfully!", {
      style: { background: "#97d28b", color: "#173d33", borderRadius: "50px" },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    switch (name) {
      case "name":
        setIsValid((prevIsValid) => ({
          ...prevIsValid,
          [name]: /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/.test(value),
        }));
        break;
      case "email":
        setIsValid((prevIsValid) => ({
          ...prevIsValid,
          [name]: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(value),
        }));
        break;
      case "phone":
        setIsValid((prevIsValid) => ({
          ...prevIsValid,
          [name]: /^[0-9]{12,}$/.test(value),
        }));
        break;
      default:
        break;
    }
  };

  const isValidForm = (validationState) => {
    return Object.values(validationState).every((fieldIsValid) => fieldIsValid);
  };

  return (
    <form className={css.forma} onSubmit={handleSubmit}>
      <label className={`${css.field} ${!isValid.name && css.invalid}`}>
        * Full name:
        <input
          className={`${css.fieldValue} ${!isValid.name && css.invalidInput}`}
          type="text"
          name="name"
          placeholder="John Rosie"
          autoComplete="name"
          value={formData.name}
          required
          onChange={handleChange}
          minLength={2}
          maxLength={30}
        />
      </label>

      {!isValid.name && <p className={css.errorMassage}>{errors.name}</p>}

      <label className={`${css.field} ${!isValid.email && css.invalid}`}>
        * E-mail:
        <input
          className={`${css.fieldValue} ${!isValid.email && css.invalidInput}`}
          type="email"
          name="email"
          value={formData.email}
          placeholder="johnrosie@gmail.com"
          autoComplete="email"
          onChange={handleChange}
          required
        />
      </label>
      {!isValid.email && <p className={css.errorMassage}>{errors.email}</p>}

      <label className={`${css.field} ${!isValid.phone && css.invalid}`}>
        * Phone:
        <input
          className={`${css.fieldValue} ${!isValid.phone && css.invalidInput}`}
          type="tel"
          name="phone"
          placeholder="380961234567"
          autoComplete="tel-country-code"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      {!isValid.phone && <p className={css.errorMassage}>{errors.phone}</p>}

      <label className={css.massage}>
        Message:
        <textarea
          type="text"
          className={css.massageText}
          onChange={handleChange}
          placeholder="Your message"
        />
      </label>
      <div className={css.btnWrapper}>
        <LearnMoreBtn type="submit" customStyles={css.customBtn}>
          Send
        </LearnMoreBtn>
      </div>
    </form>
  );
};

export default Form;
