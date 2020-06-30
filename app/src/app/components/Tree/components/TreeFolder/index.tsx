import React, { useState } from 'react';
import cn from 'classnames';

import TreeFile from '../TreeFile';
import { TreeEntryFolder, SelectedFile, FileTypes } from '../../../../../constants/interfaces/recipe';
import styles from '../../styles.module.scss';

interface Props extends TreeEntryFolder {
  handleSelect(fileData: SelectedFile): void;
  paddingLeft?: number;
  activeId?: string;
}

const defaultPaddingLeft = 15;
const paddingIncrement = 10;

function TreeFolder({ name, entries, handleSelect, paddingLeft = defaultPaddingLeft, activeId }: Props) {
  const [isContentVisible, setContentVisibility] = useState(false);
  const padding = { '--padding-left': `${paddingLeft}px` } as React.CSSProperties;
  const newLevelPadding = paddingLeft + paddingIncrement;
  return (
    <div className={styles['tree-folder-container']}>
      <button
        type="button"
        className={styles['tree-item']}
        style={padding} // eslint-disable-line react/forbid-dom-props
        onClick={() => setContentVisibility(!isContentVisible)}
      >
        {/* TODO: Replace &gt; by a folder icon */}
        &gt; {name}
      </button>
      <div className={cn(styles['tree-folder'], { [styles['tree-folder--hidden']]: !isContentVisible })}>
        {entries?.map(element =>
          element.type === FileTypes.blob ? (
            <TreeFile
              {...element}
              name={`${name}/${element.name}`}
              handleSelect={handleSelect}
              paddingLeft={newLevelPadding}
              activeId={activeId}
            />
          ) : (
            <TreeFolder
              {...element}
              handleSelect={handleSelect}
              paddingLeft={newLevelPadding}
              activeId={activeId}
            />
          )
        )}
      </div>
    </div>
  );
}

export default TreeFolder;
