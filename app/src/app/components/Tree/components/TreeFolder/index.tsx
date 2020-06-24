import React, { useState } from 'react';
import cn from 'classnames';

import File from '../TreeFile'

import { TreeFolderItem, TreeFileItem, FileTypes, SelectedFile } from '../../../../../constants/interfaces/recipe';

import styles from '../../styles.module.scss';

interface Props extends TreeFolderItem{
  handleSelect(fileData: SelectedFile): void;
  paddingLeft?: number
}

function Folder({ type, name, content, handleSelect, paddingLeft = 15 } : Props) {
  const [isContentVisible, setContentVisibility] = useState(false)
  const padding = { '--padding-left': `${paddingLeft}px` } as React.CSSProperties;
  paddingLeft += 10

  return (
    <div className={styles['tree-folder-container']}>
      {/* TODO: Replace &gt; by a folder icon */}
      <button
        className={styles['tree-item']}
        style={padding}
        onClick={() => setContentVisibility(!isContentVisible)}
      >
        &gt; {name}
      </button>
      <div className={cn(styles['tree-folder'], { [styles['tree-folder--hidden']]: !isContentVisible })}>
        {
          content.map((element : TreeFileItem | TreeFolderItem) => element.type === FileTypes.file
            ? <File {...element} name={`${name}/${element.name}`} handleSelect={handleSelect} paddingLeft={paddingLeft}/>
            : <Folder {...element} handleSelect={handleSelect} paddingLeft={paddingLeft}/>
          )
        }
      </div>
    </div>
  );
};

export default Folder;
