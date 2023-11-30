import css from "./RoundBtn.module.css";

const RoundBtn = ({ onClick, children, className }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default RoundBtn;
