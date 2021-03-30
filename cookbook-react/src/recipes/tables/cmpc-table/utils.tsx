import React from 'react';

import styles from './styles.module.scss';

/* eslint-disable react/no-multi-comp */

export const getColumns = () => [
  {
    title: 'Column1',
    render: (rowData: any) => <span className="text-big"> {rowData.id}</span>,
    className: styles.orderColumn
  },
  {
    title: 'Column2',
    render: (rowData: any) => <span className="text-big"> {rowData.data}</span>,
    className: styles.dateColumn
  },
  {
    title: 'Column3',
    render: (rowData: any) => <span className="text-big underline"> {rowData.data}</span>,
    className: styles.quantityColumn
  },
  {
    title: 'Column4',
    render: (rowData: any) => <span className="text-big underline">{rowData.data}</span>,
    className: styles.measureColumn
  },
  {
    title: 'Column5',
    render: (rowData: any) => <span className="text-big underline">{rowData.data}</span>,
    className: styles.measureColumn
  }
];

/* eslint-enable react/no-multi-comp */
