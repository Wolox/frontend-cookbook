import React, { useState } from 'react';

import { withSpinner } from '~components/Spinner';

import RecipePreview from '../Category/components/RecipePreview';
import { Recipe } from '../../../../../constants/interfaces/recipe';

import Settings from './components/Options';
import Code from './components/Code';
import styles from './styles.module.scss';

interface Props {
  title: string;
  recipe: Recipe;
  onDownload: () => void;
}

function DetailContainer({ title, recipe, onDownload }: Props) {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  const handleClick = () => setIsCodeVisible(!isCodeVisible);

  return (
    <>
      <div className="row space-between m-bottom-4 middle">
        <h1 className="title">{title}</h1>
        <a
          href="https://github.com/Wolox/frontend-cookbook"
          className={`row midle ${styles.githubLink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          by Tincho_otaku
        </a>
      </div>
      <div className={styles.detailsRecipe}>
        <RecipePreview recipe={recipe} />
        <div className={styles.settingsCheckbox}>
          <input type="checkbox" id="chkButton" onClick={handleClick} />
          <label htmlFor="chkButton" />
        </div>
      </div>
      {isCodeVisible ? <Code source={recipe.source} onDownload={onDownload} /> : <Settings />}
    </>
  );
}

export default withSpinner({
  WrappedComponent: DetailContainer,
  typeLoading: 'wandering-cubes',
  colorSpinner: '#002363',
  classNameContainer: '',
  classNameLoading: styles.loaderContainer
});
