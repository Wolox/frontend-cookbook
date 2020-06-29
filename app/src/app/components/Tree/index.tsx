import React from 'react';

import { FileTypes, SelectedFile, TreeRecipe } from '../../../constants/interfaces/recipe';

import File from './components/TreeFile';
import Folder from './components/TreeFolder';
import styles from './styles.module.scss';

interface Props {
  source: TreeRecipe;
  handleSelect(fileData: SelectedFile): void;
  namespace?: string;
}

function Tree({ source = { name: '', entries: [] }, handleSelect, namespace = 'tree' }: Props) {
  return (
    <div className={styles[namespace]}>
      <span className={styles[`${namespace}-root`]}>{source.name}</span>
      <div className={styles[`${namespace}-nodes-container`]}>
        {source.entries.map(entry =>
          entry.type === FileTypes.blob ? (
            <File {...entry} handleSelect={handleSelect} />
          ) : (
            <Folder {...entry} handleSelect={handleSelect} />
          )
        )}
      </div>
    </div>
  );
}

export default Tree;
