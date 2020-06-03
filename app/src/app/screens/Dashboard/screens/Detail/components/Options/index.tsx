import React, { useState } from 'react';

import { COLORS } from '~constants/colors';

import { DEFAULT_SIZE } from './constants';
import styles from './styles.module.scss';

function Options() {
  const [themeColor, setThemeColor] = useState<string>(COLORS.BLACK);
  const [bgColor, setBgColor] = useState<string>(COLORS.GOLDEN_TAINOI);
  const [size, setSize] = useState(DEFAULT_SIZE);

  const handleThemeColor = (event: React.FormEvent<HTMLInputElement>) =>
    setThemeColor(event.currentTarget.value);
  const handleBgColor = (event: React.FormEvent<HTMLInputElement>) => setBgColor(event.currentTarget.value);
  const handleSize = (event: React.FormEvent<HTMLInputElement>) => setSize(event.currentTarget.value);

  return (
    <div className={`${styles.settingsContainer} column`}>
      <h6 className="subtitle m-bottom-10">Configure your component</h6>
      <div className={`column ${styles.settingsOptions}`}>
        <div className="row m-bottom-10">
          <span className="subtitle separator item-1">Color</span>
          <div className="column item-2">
            <div className="row space-between middle m-bottom-5">
              <label htmlFor="theme-color" className={styles.settingLabel}>
                Theme color
              </label>
              <input
                type="color"
                className={styles.settingInputColor}
                id="theme-color"
                value={themeColor}
                onChange={handleThemeColor}
              />
            </div>
            <div className="row space-between middle">
              <label htmlFor="theme-color" className={styles.settingLabel}>
                Background color
              </label>
              <input
                type="color"
                className={styles.settingInputColor}
                id="background-color"
                value={bgColor}
                onChange={handleBgColor}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <span className="subtitle separator item-1">Size</span>
          <div className="column item-2">
            <div className="row space-between middle m-bottom-5">
              <label htmlFor="figure-size" className={styles.settingLabel}>
                Figure size
              </label>
              <input
                type="number"
                className={styles.settingInputSize}
                id="figure-size"
                value={size}
                onChange={handleSize}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Options;
