import React from 'react';
import i18next from 'i18next';
import clsx from 'clsx';

import styles from './styles.module.scss';
import ValidIcon from './assets/ic_valid.svg';
import InvalidIcon from './assets/ic_invalid.svg';

interface Props {
  title: string;
  info: string;
  extraInfo: string;
  disabled?: boolean;
  name: string;
  id: string;
  inputStyle?: 'normal' | 'custom';
  type?: 'radio' | 'checkbox';
  checked: boolean;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  wrapperClassName?: string;
  titleClassName?: string;
  infoClassName?: string;
  extraInfoClassName?: string;
}

function ZecatDifapro({
  title = i18next.t('ZecatDifapro:title'),
  info = i18next.t('ZecatDifapro:info'),
  extraInfo = i18next.t('ZecatDifapro:extraInfo'),
  disabled = false,
  name,
  id,
  inputStyle = 'normal',
  type = 'radio',
  checked = false,
  onChange,
  wrapperClassName,
  titleClassName,
  infoClassName,
  extraInfoClassName
}: Props) {
  if (inputStyle === 'custom') {
    return (
      <div
        className={clsx(
          styles.wrapper,
          `${wrapperClassName ?? ''}`,
          { [styles.default]: !disabled, [styles.disabled]: disabled, [styles.selected]: checked },
          'row middle'
        )}
        onChange={onChange}
      >
        <div className={`${styles.firstSection} row`}>
          {checked ? (
            <input
              type="image"
              src={ValidIcon}
              alt={i18next.t('ZecatDifapro:selectedImg') as string}
              name={name}
              id={id}
              className={styles.customIcon}
              data-testid={`${name}-zecatdifapro`}
            />
          ) : (
            <input
              type="image"
              src={InvalidIcon}
              alt={i18next.t('ZecatDifapro:notSelectedImg') as string}
              name={name}
              id={id}
              className={styles.customIcon}
              data-testid={`${name}-zecatdifapro`}
            />
          )}
          <div className={`${styles.info} column`}>
            <label className={clsx(styles.title, `${titleClassName ?? ''}`)} htmlFor={id}>
              {title}
            </label>
            <label htmlFor={id} className={`${infoClassName ?? ''}`}>
              {info}
            </label>
          </div>
        </div>
        <label className={clsx(styles.extraInfo, `${extraInfoClassName ?? ''}`)} htmlFor={id}>
          {extraInfo}
        </label>
      </div>
    );
  }
  return (
    <div
      className={clsx(
        styles.wrapper,
        `${wrapperClassName ?? ''}`,
        { [styles.default]: !disabled, [styles.disabled]: disabled, [styles.selected]: checked },
        'row middle'
      )}
      onChange={onChange}
    >
      <div className={`${styles.firstSection} row`}>
        <input
          id={id}
          name={name}
          className={clsx({
            [styles.checked]: checked,
            [styles.customCheckbox]: type === 'checkbox',
            [styles.customRadio]: type === 'radio'
          })}
          data-testid={`${name}-zecatdifapro`}
        />
        <div className={`${styles.info} column`}>
          <label className={clsx(styles.title, `${titleClassName ?? ''}`)} htmlFor={id}>
            {title}
          </label>
          <label htmlFor={id}>{info}</label>
        </div>
      </div>
      <label className={clsx(styles.extraInfo, `${extraInfoClassName ?? ''}`)} htmlFor={id}>
        {extraInfo}
      </label>
    </div>
  );
}

// For example purposes, in a real app remove this.
ZecatDifapro.defaultProps = {
  checked: false,
  extraInfo: '$ 50',
  id: 'test',
  info: 'Pequeña',
  inputStyle: 'normal',
  name: 'test',
  title: 'Hamburguesa'
};

export default ZecatDifapro;
