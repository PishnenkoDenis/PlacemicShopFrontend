import React, { memo } from 'react';

import cn from 'classnames';
import styles from './tabs.module.scss';

type TOptions = {
  id: string | number;
  label?: string | number;
};

type TTabs = {
  onChange: () => {};
  options: TOptions[];
  selectedId: string | number;
  className?: string;
};
const Tabs = ({ onChange, options, selectedId, className }: TTabs) => {
  return (
    <div className={cn(styles.tabs, className)}>
      {options?.map((option) => (
        <div
          role="button"
          tabIndex={0}
          className={cn(
            styles.tab,
            selectedId === option.id && styles.tabActive
          )}
          onClick={() => onChange(option.id)}
          key={option.id}
        >
          <div className={styles.tabLabel}>{option.label}</div>
        </div>
      ))}
    </div>
  );
};

export default memo(Tabs);
