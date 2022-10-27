import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { ReactComponent as ArrowLeft } from '../../assets/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrowRight.svg';

import styles from './slider.module.scss';

type TSlider = {
  items: [];
  takeArrows?: 'insideArrows' | 'outsideArrows';
  size?: 'small' | 'medium';
};

const Slider = ({
  items,
  takeArrows = 'insideArrows',
  size = 'medium',
}: TSlider) => {
  const [selectedId, setSelectedId] = useState(0);

  const takeArrowsClass = styles[takeArrows];
  const sizeClass = styles[size];

  const nextSlide = useCallback(() => {
    setSelectedId((prev) => (prev !== items.length - 1 ? prev + 1 : 0));
  }, []);

  const previousSlide = useCallback(() => {
    setSelectedId((prev) => (prev !== 0 ? prev - 1 : items.length - 1));
  }, []);
  return (
    <div className={cn(styles.sliderBox, sizeClass)}>
      <img className={styles.banner} src={items[selectedId]} alt="icon" />
      <button
        type="button"
        className={cn(styles.arrowsBoxLeft, styles.arrowLeft, takeArrowsClass)}
        onClick={previousSlide}
      >
        <ArrowLeft />
      </button>
      <button
        type="button"
        className={cn(
          styles.arrowsBoxRight,
          styles.arrowRight,
          takeArrowsClass
        )}
        onClick={nextSlide}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Slider;
