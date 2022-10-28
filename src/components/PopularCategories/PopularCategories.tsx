import React, { memo, useState } from 'react';
import ButtonCheck from '../Button/ButtonCheck/ButtonCheck';
import compIcon from '../../assets/compIcon.svg';
import applisncIcon from '../../assets/appliancesIcon.svg';
import energIcon from '../../assets/energIcon.svg';
import menuCategories from '../../assets/menuCategories.svg';
import men from '../../assets/men.svg';
import avtoIcon from '../../assets/avtoIcon.svg';
import healthIcon from '../../assets/healthIcon.svg';
import sportIcon from '../../assets/sportIcon.svg';

import styles from './categories.module.scss';

const categories = [
  { id: 1, text: 'Компьютеры и оргтехника', link: '/page2', icon: compIcon },
  { id: 2, text: 'Электроника', link: '/page2', icon: energIcon },
  { id: 3, text: 'Одежда для женщин', link: '/page2', icon: applisncIcon },
  { id: 4, text: 'Одежда для мужчин', link: '/page2', icon: men },
  { id: 5, text: 'Автотовары', link: '/page2', icon: avtoIcon },
  { id: 6, text: 'Красота и здоровье', link: '/page2', icon: healthIcon },
  { id: 7, text: 'Спорт и развлечения', link: '/page2', icon: sportIcon },
];

const allCategories = [
  { id: 1, text: 'Компьютеры и оргтехника', link: '/page2', icon: compIcon },
  { id: 2, text: 'Электроника', link: '/page2', icon: energIcon },
  { id: 3, text: 'Одежда для женщин', link: '/page2', icon: applisncIcon },
  { id: 4, text: 'Одежда для мужчин', link: '/page2', icon: men },
];

type TPopularCategories = {
  id: number;
  text?: string;
  link?: string;
  icon?: string;
};

const PopularCategories = ({ id, text, link, icon }: TPopularCategories) => {
  const [open, setOpen] = useState(false);

  const isAllCatalogies = open === true;

  return (
    <div className={styles.categoriesBox}>
      <div className={styles.label}>
        <img className={styles.labelIcon} src={menuCategories} alt="menu" />
        Популярные категории
      </div>
      <div className={styles.categoriesList}>
        {categories.map((categorie) => (
          <li className={styles.listItem} key={categorie.id}>
            <div style={{ width: 30, paddingRight: 13 }}>
              <img className={styles.icon} src={categorie.icon} alt="icon" />
            </div>

            <a className={styles.link} href={categorie.link}>
              {categorie.text}
            </a>
          </li>
        ))}
        {isAllCatalogies &&
          allCategories.map((item) => (
            <li className={styles.listItem} key={item.id}>
              <div style={{ width: 30, paddingRight: 13 }}>
                <img className={styles.icon} src={item.icon} alt="icon" />
              </div>
              <a className={styles.link} href={item.link}>
                {item.text}
              </a>
            </li>
          ))}
      </div>
      <div className={styles.allCategoriesBox}>
        <ButtonCheck
          className={styles.allCategories}
          onClick={() => setOpen((prev) => !prev)}
        >
          Все категории
        </ButtonCheck>
      </div>
    </div>
  );
};

export default memo(PopularCategories);
