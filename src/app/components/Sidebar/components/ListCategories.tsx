import React, { useMemo, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import cn from 'classnames';

import { getCategories } from '~utils/queries';
import { GlobalContext } from '~context/GlobalProvider';
import { actionCreators } from '~context/GlobalProvider/actions';

import { Categories } from '../interface';
import styles from '../styles.module.scss';

function ListCategories() {
  const { state, dispatch } = useContext(GlobalContext);
  const { loading, data } = useQuery(getCategories());
  const categories = !loading && data ? data.repository.object.entries : [];
  const handleSelect = useMemo(
    () => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
      dispatch(actionCreators.selectCategory((event.target as any).id)),
    [dispatch]
  );

  return (
    <div className={`column ${styles.contentLinks} start`}>
      {categories.map((category: Categories) => (
        <button
          type="button"
          key={category.oid}
          id={category.name}
          className={cn(styles.simpleLink, {
            [styles.selected]: state.category === category.name
          })}
          onClick={handleSelect}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default ListCategories;
