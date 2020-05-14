import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import cn from 'classnames';

import { getCategories } from '~utils/queries';
import Routes from '~constants/routes';

import { Categories } from '../interface';

import styles from '../styles.module.scss';

function ListCategories() {
  const categoryType = useLocation().pathname.split('/')[2];

  const { loading, data } = useQuery(getCategories());
  const categories = !loading && data ? data.repository.object.entries : [];

  return (
    <div className={`column ${styles.contentLinks} start`}>
      {categories.map((category: Categories) => (
        <Link
          key={category.oid}
          className={cn(styles.simpleLink, { [styles.selected]: categoryType === category.name })}
          to={Routes.CATEGORY.replace(':category', category.name)}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}

export default ListCategories;
