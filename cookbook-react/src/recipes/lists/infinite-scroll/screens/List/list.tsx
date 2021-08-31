import React, { useCallback, useState } from 'react';
import cn from 'classnames';

import { useRequest } from 'app/hooks/useRequest';

import { getList } from '../../services/listService';
import InfiniteScroll from '../../components/InfiniteScroll';

import styles from './styles.module.scss';

const LIMIT_FOR_PAGE = 20;

interface Props {
  isGrid?: boolean;
}

function ListScreen({ isGrid = false }: Props) {
  const [skip, setSkip] = useState(0);
  const [list, setList] = useState<number[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const [, loading, , getPage] = useRequest(
    {
      request: getList,
      payload: { skip, limit: LIMIT_FOR_PAGE },
      withPostSuccess: (d) => {
        if (d) {
          if (d.list.length === 0) {
            return;
          }
          const totalList = [...list, ...d.list];
          setList(totalList);
          setSkip((s) => s + 1);
          if (d.totalCount <= totalList.length + 1) {
            setHasMore(false);
          }
        }
      }
    },
    []
  );

  const nextElements = useCallback(() => {
    getPage({ skip, limit: LIMIT_FOR_PAGE });
  }, [getPage, skip]);

  return (
    <div className={cn({ [styles.list]: !isGrid }, { [styles.grid]: isGrid })}>
      <h1 className={styles.title}>Listado de elementos</h1>
      <InfiniteScroll
        onLoadMore={nextElements}
        hasMore={hasMore}
        isLoading={loading}
        loader={<div className={styles.loading}>Cargando...</div>}
      >
        <div className={cn({ [styles.contentItemsGrid]: isGrid })}>
          {list.map((item) => (
            <div key={item} className={cn({ [styles.itemList]: !isGrid }, { [styles.itemGrid]: isGrid })}>
              Elemento #{item}
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default ListScreen;
