import React from 'react';

import { TreeEntryFile, SelectedFile } from '../../../../../constants/interfaces/recipe';
import styles from '../../styles.module.scss';

interface Props extends TreeEntryFile {
  handleSelect(fileData: SelectedFile): void;
  paddingLeft?: number;
}

const defaultPaddingLeft = 15;

function TreeFile({ name, src = '', isBinary, handleSelect, paddingLeft = defaultPaddingLeft }: Props) {
  const padding = { '--padding-left': `${paddingLeft}px` } as React.CSSProperties;
  const lang = name.split('.').pop() || name;
  return (
    <button
      type="button"
      className={styles['tree-item']}
      style={padding} // eslint-disable-line react/forbid-dom-props
      onClick={() => handleSelect({ name, src, lang, isBinary })}
    >
      - {name.split('/').pop() || name}
    </button>
  );
}

export default TreeFile;
