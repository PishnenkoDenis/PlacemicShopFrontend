import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import crossIcon from '../../assets/cross.svg';
import styles from './modal.module.scss';

const modalElement = document.body;

type TModal = {
  children?: ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: TModal) => {
  return createPortal(
    <div
      role="button"
      tabIndex={0}
      className={styles.modalBackground}
      onClick={onClose}
    >
      <div
        role="button"
        tabIndex={0}
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className={styles.cross}
          alt="cross"
          src={crossIcon}
          onClick={onClose}
        />
        <div className={styles.modalChidren}>{children}</div>
      </div>
    </div>,
    modalElement
  );
};

export default Modal;
