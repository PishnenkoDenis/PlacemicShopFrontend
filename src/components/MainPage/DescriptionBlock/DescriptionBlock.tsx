import React, { useState } from 'react';
import ButtonCheck from '../../Button/ButtonCheck/ButtonCheck';
import text from '../../../assets/local/descriptionBlock.json';
import styles from './description.module.scss';

const DescriptionBlock = () => {
  const [open, setOpen] = useState(false);
  const isAllDescription = open === true;

  return (
    <div className={styles.descriptionBox}>
      <div
        className={isAllDescription ? styles.background : styles.description}
      >
        {text.description}
      </div>
      {isAllDescription && <div> {text.description}</div>}
      <div>
        <ButtonCheck
          className={styles.buttonCheck}
          onClick={() => setOpen((prev) => !prev)}
        >
          Читать полностью
        </ButtonCheck>
      </div>
    </div>
  );
};

export default DescriptionBlock;
