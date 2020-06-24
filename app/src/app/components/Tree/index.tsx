import React from 'react';

import {
  FileTypes,
  TreeRecipeItem,
  TreeFileItem,
  TreeFolderItem,
  SelectedFile
} from '../../../constants/interfaces/recipe';

import File from './components/TreeFile';
import Folder from './components/TreeFolder';
import styles from './styles.module.scss';

// TODO: Remove once the integration is done
import TreeComponentsExample from './mockedData';

interface Props {
  // TODO: Remove ? from recipe once we receive a TreeRecipe instead of a recipe
  recipe?: TreeRecipeItem;
  handleSelect(fileData: SelectedFile): void;
  namespace?: string;
}

function Tree({ recipe = TreeComponentsExample, handleSelect, namespace = 'tree' }: Props) {
  return (
    <div className={styles[namespace]}>
      <span className={styles[`${namespace}-root`]}>{recipe.name}</span>
      <div className={styles[`${namespace}-nodes-container`]}>
        {recipe.files.map((element: TreeFileItem | TreeFolderItem) =>
          element.type === FileTypes.file ? (
            <File {...element} handleSelect={handleSelect} />
          ) : (
            <Folder {...element} handleSelect={handleSelect} />
          )
        )}
      </div>
    </div>
  );
}

export default Tree;
