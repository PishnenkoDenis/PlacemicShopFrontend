import React, { memo, useState } from 'react';
import { useParams } from 'react-router';
import { useMutation } from '@apollo/client';

import Button from '../Button';
import {
  setAndValidateInputs,
  validateConditionNumber,
  validateDiscountName,
  validatePercentNumber,
} from '../../utils';
import styles from './discountForm.module.scss';
import UPDATE_DISCOUNT from '../../graphQl/updateDiscount';
import ADD_TO_DISCOUNT from '../../graphQl/addDiscount';
import {
  EDIT_DISCOUNT,
  INPUT_NUMBER,
  INPUT_TEXT,
  ADD_DISCOUNT,
} from '../../constants';

const DiscountForm = ({ isEdit, propId, closeModal, refetch }) => {
  const { id } = useParams();
  const userId = Number(id);

  const [discountName, setDiscountName] = useState<string>('');
  const [validName, setValidName] = useState<boolean>(true);

  const [percent, setPercent] = useState<number | null>(null);
  const [validPercent, setValidPercent] = useState<boolean>(true);

  const [condition, setCondition] = useState<number | null>(null);
  const [validCondition, setValidCondition] = useState<boolean>(true);

  const [validateError, setValidateError] = useState<string>('');

  const [updateDiscount] = useMutation(UPDATE_DISCOUNT);

  const [addDiscount] = useMutation(ADD_TO_DISCOUNT);

  const executeAfterResponse = () => {
    refetch();
    closeModal();
  };

  const update = async () => {
    try {
      await updateDiscount({
        variables: {
          dto: {
            discountName,
            percent,
            condition,
            userId,
          },
          id: Number(propId),
        },
      });
      executeAfterResponse();
    } catch (error) {
      setValidateError(error.message);
    }
  };

  const create = async () => {
    try {
      await addDiscount({
        variables: {
          discount: {
            discountName,
            percent,
            condition,
            userId,
          },
        },
      });
      executeAfterResponse();
    } catch (error) {
      setValidateError(error.message);
    }
  };

  const createOrUpdateDiscount = () => {
    if (validateError) setValidateError('');
    if (isEdit) update();
    else create();
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>
        {isEdit ? EDIT_DISCOUNT : ADD_DISCOUNT}
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
                    validateDiscountName,
                    INPUT_TEXT
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
                  name="percent"
                  id="percent"
                  placeholder="Введите число"
                  value={percent}
                  onChange={(e) =>
                    setAndValidateInputs(
                      e,
                      setPercent,
                      setValidPercent,
                      validatePercentNumber,
                      INPUT_NUMBER
                    )
                  }
                />
              </div>
              {!validPercent && (
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
                      validateConditionNumber,
                      INPUT_NUMBER
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
          {validateError && (
            <span className={styles.errorValidate}>{validateError}</span>
          )}
        </div>
        <Button
          type="primary"
          className={styles.button}
          onClick={createOrUpdateDiscount}
        >
          Сохранить
        </Button>
      </form>
    </div>
  );
};

export default memo(DiscountForm);
