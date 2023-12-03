import { useState } from "react";

import LearnMoreBtn from "../../shared/components/LearnMoreBtn/LearnMoreBtn";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsValid((prevIsValid) => ({
      ...prevIsValid,
      name: /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/.test(formData.name),
      email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(
        formData.email
      ),
      phone: /^[0-9]*$/.test(formData.phone),
    }));

    if (!isValidForm()) {
      console.log("Form validation failed. Please correct errors.");
      return;
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    console.log("Form submitted successfully!");
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
          [name]:
            /^[a-zA-Zа-яА-Я]+(?:[' -][a-zA-Zа-яА-Я]+)*( [a-zA-Zа-яА-Я]+(?:[' -][a-zA-Zа-яА-Я]+)*){1}$/.test(
              value
            ),
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
          [name]: /^[0-9]*$/.test(value),
        }));
        break;
      default:
        break;
    }
  };

  const isValidForm = () => {
    return Object.values(isValid).every((fieldIsValid) => fieldIsValid);
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
      {!isValid.name && <p className={css.errorMassage}>Wrong Fullname</p>}

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
      {!isValid.email && <p className={css.errorMassage}>Wrong Email</p>}

      <label className={`${css.field} ${!isValid.phone && css.invalid}`}>
        * Phone:
        <input
          className={`${css.fieldValue} ${!isValid.phone && css.invalidInput}`}
          type="tel"
          name="phone"
          placeholder="380961234567"
          autoComplete="tel-country-code"
          value={formData.phone}
          minLength={8}
          onChange={handleChange}
          required
        />
      </label>
      {!isValid.phone && <p className={css.errorMassage}>Wrong Phone</p>}

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

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     });
//   };

//   const [isValid, setIsValid] = useState({
//     name: true,
//     email: true,
//     phone: true,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     switch (name) {
//       case "name":
//         setIsValid((prevIsValid) => ({
//           ...prevIsValid,
//           [name]: /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/.test(value),
//         }));
//         break;
//       case "email":
//         setIsValid((prevIsValid) => ({
//           ...prevIsValid,
//           [name]: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(value),
//         }));
//         break;
//       case "phone":
//         setIsValid((prevIsValid) => ({
//           ...prevIsValid,
//           [name]: /^[0-9]*$/.test(value),
//         }));
//         break;
//       default:
//         break;
//     }
//   };
//   return (
//     <form className={css.forma} onSubmit={handleSubmit}>
//       <label className={css.field}>
//         * Full name:
//         <input
//           className={css.fieldValue}
//           type="text"
//           name="name"
//           placeholder="John Rosie"
//           value={formData.name}
//           required
//           onChange={handleChange}
//           minLength={2}
//           maxLength={30}
//         />
//       </label>
//       {!isValid.name && <p className={css.errorMassage}>Invalid Fullname</p>}

//       <label className={css.field}>
//         * E-mail:
//         <input
//           className={css.fieldValue}
//           type="email"
//           name="email"
//           value={formData.email}
//           placeholder="johnrosie@gmail.com"
//           onChange={handleChange}
//           required
//         />
//       </label>
//       {!isValid.name && <p className={css.errorMassage}>Wrong Email</p>}
//       <label className={css.field}>
//         * Phone:
//         <input
//           className={css.fieldValue}
//           type="tel"
//           name="phone"
//           placeholder="380961234567"
//           value={formData.phone.replace(/\D/g, "")}
//           minLength={8}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       {!isValid.name && <p className={css.errorMassage}>Invalid Phone</p>}
//       <label className={css.massage}>
//         Message:
//         <textarea
//           type="text"
//           className={css.massageText}
//           onChange={handleChange}
//           placeholder="Your message"
//         />
//       </label>
//       <div className={css.btnWrapper}>
//         <LearnMoreBtn type="submit" customStyles={css.customBtn}>
//           Send
//         </LearnMoreBtn>
//       </div>
//     </form>
//   );
// };

// export default Form;
