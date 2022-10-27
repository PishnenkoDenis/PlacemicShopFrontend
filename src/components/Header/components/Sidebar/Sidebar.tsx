import React, { memo, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Slider from '../../../Slider/Slider';
import styles from './sidebar.module.scss';
import { temp } from './tempcategories';
import banner2 from '../../../../assets/baner2.svg';
import dog from '../../../../assets/imgShopSale.svg';

const items = [banner2, dog, banner2, dog, banner2, dog, banner2, dog, banner2];

const Sidebar = () => {
  const [selectedId, setSelectedId] = useState(1);

  const subCategoriesList = useMemo(
    () => temp.find((i) => i.id === selectedId)?.subcategiries ?? [],
    [selectedId]
  );

  return (
    <div className={styles.sidebarBox} onClick={(e) => e.stopPropagation()}>
      <div className={styles.sidebarInner}>
        {temp.map((item) => (
          <li
            className={cn(
              styles.listItem,
              selectedId === item.id && styles.activeListItem
            )}
            key={item.id}
            onClick={() => setSelectedId(item.id)}
          >
            <div className={styles.iconInner}>
              {item.icon && (
                <img className={styles.icon} src={item.icon} alt="icon" />
              )}
            </div>
            <div className={styles.linkInner}>
              <span className={styles.link}>{item.title}</span>
            </div>
          </li>
        ))}
      </div>
      <div className={styles.drawer}>
        <div className={styles.subcategories}>
          {subCategoriesList.map((item) => (
            <div className={styles.list} key={item.id}>
              <Link
                className={cn(styles.subCategoriaItem, styles.title)}
                to={item.link}
                key={item.id}
              >
                {item.subtitle}
              </Link>
              {item?.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.id}
                  className={styles.subCategoriaItem}
                  to={subcategory.link}
                >
                  {subcategory.subcategoria}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.sliderBox}>
          <Slider items={items} size="small" takeArrows="outsideArrows" />
        </div>
      </div>
    </div>
  );
};

export default memo(Sidebar);
