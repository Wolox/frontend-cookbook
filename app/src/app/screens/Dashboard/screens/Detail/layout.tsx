import React, { useState } from 'react';

import { withSpinner } from '~components/Spinner';

import RecipePreview from '../Category/components/RecipePreview';
import { Recipe, SelectedFile } from '../../../../../constants/interfaces/recipe';
import Tree from '../../../../components/Tree';

import Settings from './components/Options';
import Code from './components/Code';
import styles from './styles.module.scss';

interface Props {
  title: string;
  recipe: Recipe;
  onDownload: () => void;
}

function DetailContainer({ title, recipe, onDownload }: Props) {
  const { html, scss } = recipe;
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  const handleClick = () => setIsCodeVisible(!isCodeVisible);

  // const [fileData, setFileData] = useState<{ name: string, code: string, lang: string }>({ name: '', code: '', lang: '' });
  // const handleFileSelect = ( data: SelectedFile ) => { setFileData(data); }

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
      {isCodeVisible ? (
        // <div className={styles.filesStructureContainer}>
        //   <Tree handleSelect={handleFileSelect}/>
        <Code
          // code={fileData.code}
          // name={fileData.name}
          // lang={fileData.lang}
          html={html.content}
          scss={scss.content}
          readme="hola"
          onDownload={onDownload}
        />
      ) : (
        // </div>
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
