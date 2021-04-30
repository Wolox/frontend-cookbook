import React, { useState } from 'react';

import { OptionId } from '../../hooks/useUniqueSelection';

import Selector from './Selector';
import styles from './styles.module.scss';

const options1 = [
  { id: 1, title: 'Opción 1', disabled: false },
  { id: 2, title: 'Opción 2', disabled: false },
  { id: 3, title: 'Opción 3', disabled: false }
];

const options2 = [
  { id: '10', title: 'Opción 1', disabled: false },
  { id: '20', title: 'Opción 2', disabled: false },
  { id: '30', title: 'Opción 3', disabled: false }
];

const options3 = [
  { id: 'id1', title: 'Opción 1', disabled: false },
  { id: 'id2', title: 'Opción 2', disabled: false },
  { id: 'id3', title: 'Opción 3', disabled: true }
];

function Example() {
  const [content1, setContent1] = useState('Selected tab with id: 1');
  const handleChange1 = (id: OptionId) => {
    setContent1(`Selected tab with id: ${id}`);
  };

  const [content2, setContent2] = useState('Selected tab with id: 20');
  const [active, setActive] = useState('20');
  const handleChange2 = (id: string) => {
    setActive(id);
    setContent2(`Selected tab with id: ${id}`);
  };
  const handleClick = () => {
    const numberId = parseInt(active);
    // eslint-disable-next-line no-magic-numbers
    const activeId = numberId >= options2.length * 10 ? '10' : `${numberId + 10}`;
    setActive(activeId);
    setContent2(`Selected tab with id: ${activeId}`);
  };

  const [content3, setContent3] = useState('Selected tab with id: id1');
  const handleChange3 = (id: OptionId) => {
    setContent3(`Selected tab with id: ${id}`);
  };

  return (
    <div className={styles.exampleContainer}>
      <h2 className={styles.title}>Active state controlled by the Selector component</h2>
      <Selector className={styles.tab} options={options1} onChange={handleChange1} initialValue={2} />
      <h3 className={styles.firstContent}>{content1}</h3>
      <h2 className={styles.title}>Active state controlled by the Selector&apos;s parent component</h2>
      <Selector className={styles.tab} options={options2} onChange={handleChange2} active={active} />
      <h3>{content2}</h3>
      <button className={styles.button} type="button" onClick={handleClick}>
        Go to next tab
      </button>
      <h2 className={styles.title}>Selector with disabled tab</h2>
      <Selector className={styles.tab} options={options3} onChange={handleChange3} initialValue="2" />
      <h3 className={styles.firstContent}>{content3}</h3>
    </div>
  );
}

export default Example;
