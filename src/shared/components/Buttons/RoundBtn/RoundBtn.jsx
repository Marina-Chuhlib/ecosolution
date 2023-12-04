import css from "./RoundBtn.module.css";

const RoundBtn = ({ onClick, children, customStyles }) => {
  const defaultStyles = css.btn;

  const combinedStyles = `${defaultStyles} ${customStyles || ""}`;
  return (
    <button type="button" className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default RoundBtn;
