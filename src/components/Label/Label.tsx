import React, { memo } from 'react';
import cn from 'classnames';
import styles from './label.module.scss';

type TLabel = {
  label: string;
  style?: string;
  className?: string;
};

const Label = ({ label, style = 'primary', className }: TLabel) => {
  const styleClass = styles[style];
  return <div className={cn(styles.label, styleClass, className)}>{label}</div>;
};

export default memo(Label);
