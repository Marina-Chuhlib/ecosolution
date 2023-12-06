import { createPortal } from "react-dom";
import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import { ReactComponent as Close } from "../../../images/svg/close.svg";

import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ closeModal, children }) => {
  const onCloseModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", onCloseModal);

    return () => document.removeEventListener("keydown", onCloseModal);
  }, [onCloseModal]);

  return createPortal(
    <div className={css.overlay} onClick={onCloseModal}>
      <div className={css.modal}>
        <button type="button" onClick={onCloseModal} className={css.closeBtn}>
          <Close className={css.icon} />
          close
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
