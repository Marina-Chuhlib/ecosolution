import { createPortal } from "react-dom";
import { useEffect } from "react";

import { ReactComponent as Close } from "../../../images/close.svg";

import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ closeModal, children }) => {
  const onCloseModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeModal);

    return () => document.removeEventListener("keydown", closeModal);
  }, [closeModal]);

  return createPortal(
    <div className={css.overlay} onClick={onCloseModal}>
      <div className={css.modal}>
        <button type="button" onClick={onCloseModal} className={css.closeBtn}>
          <Close />
          close
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
