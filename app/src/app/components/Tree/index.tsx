import React from 'react';

import { FileTypes, SelectedFile, TreeRecipe } from '../../../constants/interfaces/recipe';

import File from './components/TreeFile';
import Folder from './components/TreeFolder';
import styles from './styles.module.scss';

interface Props {
  title: string;
  source: TreeRecipe;
  handleSelect(fileData: SelectedFile): void;
  activeId: string;
  namespace?: string;
}

function Tree({
  source = { name: '', entries: [] },
  title,
  handleSelect,
  activeId,
  namespace = 'tree'
}: Props) {
  return (
    <div className={styles[namespace]}>
      <span className={styles[`${namespace}-root`]}>{title}</span>
      <div className={styles[`${namespace}-nodes-container`]}>
        {source.entries.map(entry =>
          entry.type === FileTypes.blob ? (
            <File {...entry} handleSelect={handleSelect} activeId={activeId} />
          ) : (
            <Folder {...entry} handleSelect={handleSelect} activeId={activeId} />
          )
        )}
      </div>
    </div>
  );
}

export default Tree;
