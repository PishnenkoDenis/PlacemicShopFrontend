import React from 'react';
import { createPortal } from 'react-dom';


import crossIcon from '../../assets/cross.svg';
import styles from './modal.module.scss';

const modalElement = document.body;

const Modal = ({ children, onClose }) => {
  return createPortal(
    <div className={styles.modalBackground} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
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
