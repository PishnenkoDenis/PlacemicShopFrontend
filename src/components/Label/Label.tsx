import React, { memo } from 'react';
import cn from 'classnames';
import styles from './label.module.scss';

type TLabel = {
  label: string;
  style?: string;
};

const Label = ({ label, style = 'primary' }: TLabel) => {
  const styleClass = styles[style];
  return <div className={cn(styles.label, styleClass)}>{label}</div>;
};

export default memo(Label);
