import { Styles } from 'react-select';

const transparent = 'rgba(0, 0, 0, 0)';
const alabaster = '#F7F7F7';
const jade = '#00B876';
const trinidad = '#E0320B';

/* eslint-disable no-nested-ternary */
export const customStyles = (error?: string): Partial<Styles<any, any>> => ({
  control: base => ({
    ...base,
    boxShadow: 'none',
    '&:hover': {
      borderColor: jade
    },
    backgroundColor: alabaster,
    border: `1px solid ${error ? trinidad : transparent}`,
    height: '50px',
    margin: '15px 0 5px'
  }),
  menu: provided => ({ ...provided, zIndex: 3 }),
  indicatorSeparator: () => ({ display: 'none' })
});
