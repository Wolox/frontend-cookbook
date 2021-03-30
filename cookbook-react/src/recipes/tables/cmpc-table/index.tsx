import React, { ReactNode, ReactText } from 'react';
import clsx from 'clsx';

import ArrowIcon from './components/ArrowIcon';
import styles from './styles.module.scss';
import { data as dataSample } from './constants';
import { getColumns } from './utils';

interface Column<T> {
  title: string;
  render: (rowData: T) => ReactNode;
  className?: string;
}

interface TableProps<T> {
  data?: T[];
  columns?: Column<T>[];
  emptyMessage: string;
  page?: number;
  totalPages?: number;
  onChangePage?: (next?: boolean) => void;
  onRowClick?: (id: string | number) => void;
}

function Table<T extends { id: ReactText }>({
  data,
  columns,
  page = 1,
  totalPages,
  onChangePage,
  emptyMessage,
  onRowClick
}: TableProps<T>) {
  const prevDisabled = page <= 1;
  const nextDisabled = page === totalPages;

  return (
    <>
      <div className={styles.tableContainer}>
        <div className={`row space-between ${styles.tableRowHeader}`}>
          {columns &&
            columns.map(column => (
              <div
                key={column.title}
                className={`row center middle ${styles.tableHeader} ${column.className}`}
              >
                {column.title}
              </div>
            ))}
        </div>
        {!data?.length && (
          <div className={`row center middle text-normal ${styles.tableRowBody}`}> {emptyMessage} </div>
        )}
        {data?.map(rowData => (
          <div
            key={rowData.id}
            className={clsx('row space-between', styles.tableRowBody, { pointer: !!onRowClick })}
            onClick={() => onRowClick?.(rowData.id)}
          >
            {columns &&
              columns.map(column => (
                <div
                  key={column.title}
                  className={`row center middle text-big ${styles.tableCell} ${column.className}`}
                >
                  {column.render(rowData)}
                </div>
              ))}
          </div>
        ))}
      </div>
      {!!totalPages && onChangePage && (
        <div className="row end middle m-top-5">
          <ArrowIcon disabled={prevDisabled} arrow="Left" onChangePage={onChangePage} />
          <p className="text-big m-left-3 bold">{page}&nbsp;</p>
          <p className={`${styles.tablePaginationTotal} text-big m-right-3`}>- {totalPages}</p>
          <ArrowIcon disabled={nextDisabled} arrow="Right" onChangePage={onChangePage} />
        </div>
      )}
    </>
  );
}

// This is only for testing proposes, remove in a real project
Table.defaultProps = {
  columns: getColumns(),
  data: dataSample,
  onChangePage: () => null,
  page: 1,
  totalPages: 10
};

export default Table;
