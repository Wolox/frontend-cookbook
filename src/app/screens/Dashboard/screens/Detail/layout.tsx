import React, { useState } from 'react';

import { withSpinner } from '~components/Spinner';

import ShadowComponent from '../Category/components/ShadowComponent';
import RecipePreview from '../Category/components/RecipePreview';
import { Recipe } from '../../../../../constants/interfaces/component';

import Settings from './components/Options';
import Code from './components/Code';
import styles from './styles.module.scss';

interface Props {
  title: string;
  component: Recipe;
  onDownload: () => void;
}

function DetailContainer({ title, component, onDownload }: Props) {
  const { html, scss } = component;
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
      <div className={styles.detailsComponent}>
        <RecipePreview component={component} />
        <div className={styles.settingsCheckbox}>
          <input type="checkbox" id="chkButton" onClick={handleClick} />
          <label htmlFor="chkButton" />
        </div>
      </div>
      {isCodeVisible ? (
        <Code html={html.content} scss={scss.content} onDownload={onDownload} />
      ) : (
        <Settings />
      )}
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
