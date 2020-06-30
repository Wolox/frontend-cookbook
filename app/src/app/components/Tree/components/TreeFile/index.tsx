import React from 'react';
import cn from 'classnames';

import { TreeEntryFile, SelectedFile } from '../../../../../constants/interfaces/recipe';
import styles from '../../styles.module.scss';

interface Props extends TreeEntryFile {
  handleSelect(fileData: SelectedFile): void;
  paddingLeft?: number;
  activeId?: string;
}

const defaultPaddingLeft = 15;

function TreeFile({
  name,
  src = '',
  isBinary,
  id,
  activeId,
  handleSelect,
  paddingLeft = defaultPaddingLeft
}: Props) {
  const padding = { '--padding-left': `${paddingLeft}px` } as React.CSSProperties;
  const lang = name.split('.').pop() || name;
  return (
    <button
      type="button"
      className={cn(styles['tree-item'], { [styles['tree-item--active']]: id === activeId })}
      style={padding} // eslint-disable-line react/forbid-dom-props
      onClick={() => handleSelect({ name, src, lang, isBinary, id })}
    >
      - {name.split('/').pop() || name}
    </button>
  );
}

export default TreeFile;
