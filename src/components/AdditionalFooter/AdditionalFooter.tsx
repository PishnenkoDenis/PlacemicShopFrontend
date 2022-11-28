import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import { throttle } from 'lodash';
import { watchedproducts } from '../../data/data';
import Wrapper from '../Wrapper/Wrapper';
import PreviouslyWatchedCard from '../Card/PreviouslyWatchedCard';
import ContainerBackground from '../ContainerBackground';

import styles from './additionalFooter.module.scss';

export type TPreviouslyWatchedCard = {
  image: string;
  shortDesc: string;
  currentPrice: number;
};

const AdditionalFooter = () => {
  const screenWidth = 1277;
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const setWidthContainer = useCallback(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    setWidthContainer();
    const throttleSetWidthContainer = throttle(setWidthContainer, 300);
    window.addEventListener('resize', throttleSetWidthContainer);
    return () => {
      window.removeEventListener('resize', throttleSetWidthContainer);
    };
  }, [setWidthContainer]);

  const watchedProductsFiltered = useMemo(() => {
    let arrlenght = 5;
    if (width < screenWidth) {
      arrlenght = 4;
    }
    return [...watchedproducts].splice(0, arrlenght);
  }, [watchedproducts, width]);

  return (
    <ContainerBackground className={styles.backgroundBox}>
      <Wrapper label="Ранее вы смотрели">
        <div className={styles.previouslyWatchedCardBox} ref={ref}>
          {watchedProductsFiltered.map((item) => (
            <PreviouslyWatchedCard item={item} key={item.id} />
          ))}
        </div>
      </Wrapper>
    </ContainerBackground>
  );
};

export default AdditionalFooter;
