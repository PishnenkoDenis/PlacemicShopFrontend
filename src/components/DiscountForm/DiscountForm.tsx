import React, { memo, useState } from 'react';
import { useParams } from 'react-router';
import { useMutation } from '@apollo/client';

import Button from '../Button';
import {
  setAndValidateInputs,
  validateConditionNumber,
  validateDiscountName,
  validateProcentNumber,
} from '../../utils';
import styles from './discountForm.module.scss';
import { ADD_DISCOUNT, UPDATE_DISCOUNT } from '../../graphQl/mutation';

const DiscountForm = ({ isEdit, propId, closeModal, refetch, setError }) => {
  const { id } = useParams();
  const userId = Number(id);

  const [discountName, setDiscountName] = useState<any>('');
  const [validName, setValidName] = useState<any>(true);

  const [procent, setProcent] = useState<any>(null);
  const [validProcent, setValidProcent] = useState<any>(true);

  const [condition, setCondition] = useState<any>(null);
  const [validCondition, setValidCondition] = useState<any>(true);

  const [updateDiscount] = useMutation(UPDATE_DISCOUNT);

  const [addDiscount] = useMutation(ADD_DISCOUNT);

  const update = () => {
    updateDiscount({
      variables: {
        dto: {
          discountName,
          procent: Number(procent),
          condition: Number(condition),
          userId,
        },
        id: Number(propId),
      },
    })
      .then(() => {
        closeModal();
        refetch();
      })
      .catch((error) => {
        setError(error.message);
        closeModal();
      });
  };

  const create = () => {
    addDiscount({
      variables: {
        discount: {
          discountName,
          procent: Number(procent),
          condition: Number(condition),
          userId,
        },
      },
    })
      .then(() => {
        closeModal();
        refetch();
      })
      .catch((error) => {
        setError(error.message);
        closeModal();
      });
  };

  const createOrUpdateDiscount = () => {
    if (isEdit) update();
    else create();
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>
        {isEdit ? 'Редактировать скидку' : 'Добавить скидку'}
      </span>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <div className={styles.errorGroup}>
            <div className={styles.nameGroup}>
              <span>Название скидки</span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Введите название"
                value={discountName}
                onChange={(e) =>
                  setAndValidateInputs(
                    e,
                    setDiscountName,
                    setValidName,
                    validateDiscountName
                  )
                }
              />
            </div>
            {!validName && (
              <span className={styles.errorText}>
                Текст должен состоять из букв или цифр и не превышать 20
                символов
              </span>
            )}
          </div>
          <div className={styles.numbersGroup}>
            <div className={styles.errorGroup}>
              <div className={styles.procentGroup}>
                <span>Процент скидки, %</span>
                <input
                  type="number"
                  name="procent"
                  id="procent"
                  placeholder="Введите число"
                  value={procent}
                  onChange={(e) =>
                    setAndValidateInputs(
                      e,
                      setProcent,
                      setValidProcent,
                      validateProcentNumber
                    )
                  }
                />
              </div>
              {!validProcent && (
                <span className={styles.errorText}>
                  Введите значение от 0 до 100
                </span>
              )}
            </div>
            <div className={styles.errorGroup}>
              <div className={styles.conditionalGroup}>
                <span>Условие, шт.</span>
                <input
                  type="number"
                  name="condition"
                  id="condition"
                  placeholder="Введите число"
                  value={condition}
                  onChange={(e) =>
                    setAndValidateInputs(
                      e,
                      setCondition,
                      setValidCondition,
                      validateConditionNumber
                    )
                  }
                />
              </div>
              {!validCondition && (
                <span className={styles.errorText}>
                  Введите значение больше 1
                </span>
              )}
            </div>
          </div>
        </div>
        <Button
          type="primary"
          className={styles.button}
          onClick={() => createOrUpdateDiscount()}
        >
          Сохранить
        </Button>
      </form>
    </div>
  );
};

export default memo(DiscountForm);
