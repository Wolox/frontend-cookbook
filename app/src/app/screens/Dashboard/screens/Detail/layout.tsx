import React from 'react';

import { withSpinner } from '~components/Spinner';
import { Recipe } from '~constants/interfaces/recipe';

import RecipePreview from '../Category/components/RecipePreview';

import Code from './components/Code';
import styles from './styles.module.scss';

interface Props {
  title: string;
  recipe: Recipe;
  onDownload: () => void;
}

function DetailContainer({ title, recipe, onDownload }: Props) {
  return (
    <>
      <div className={styles.upperSection}>
        <div className="row space-between m-bottom-4 middle">
          <h1 className="title">{title}</h1>
          <a
            href="https://github.com/Wolox/frontend-cookbook"
            className={`row midle ${styles.githubLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* TODO: Add GitHub user of the creator. */}
            by Tincho_otaku
          </a>
        </div>
        <div className={styles.detailsRecipe}>
          <RecipePreview recipe={recipe} />
        </div>
      </div>
      <Code title={title} source={recipe.source} onDownload={onDownload} />
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
