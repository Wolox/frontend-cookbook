import React from 'react';

import { TreeFileItem, SelectedFile } from '../../../../../constants/interfaces/recipe';

import styles from '../../styles.module.scss';

interface Props extends TreeFileItem {
  handleSelect(fileData: SelectedFile): void;
  paddingLeft?: number
}

function TreeFile({ type, name, content, handleSelect, paddingLeft = 15 } : Props) {
  const padding = { '--padding-left': `${paddingLeft}px` } as React.CSSProperties;
  const lang = name.split('.').pop() || name;
  return (
    <button
      className={styles['tree-item']}
      style={padding}
      onClick={() => handleSelect({ name, code: content, lang })}
    >
      - {name.split('/').pop() || name}
    </button>
  );
};

export default TreeFile;
