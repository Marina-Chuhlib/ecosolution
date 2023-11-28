import { ReactComponent as LearnBtn } from "../../../images/learnBtn.svg";

import css from "./LearnMoreBtn.module.css";

const LearnMoreBtn = () => {
  return (
    <button type="button" className={css.btn}>
      Learn more <LearnBtn />
    </button>
  );
};

export default LearnMoreBtn;
