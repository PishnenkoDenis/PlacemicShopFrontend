import React, { memo } from 'react';
import { ReactComponent as FavoriteSvg } from '../../../../assets/favorite.svg';

import styles from './favorite.module.scss';

type T = {
  count: number;
};

const Favorite = ({ count }: T) => {
  return (
    <div className={styles.favorite}>
      <div className={styles.imageContainer}>
        <div className={styles.count}>{count}</div>
        <FavoriteSvg className={styles.favoriteIcon} />
      </div>
      <div className={styles.favoriteText}>Избранное</div>
    </div>
  );
};

export default memo(Favorite);
