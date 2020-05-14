import React, { useState } from 'react';

import { withSpinner } from '~components/Spinner';
import useShadow from '~hooks/useShadow';

import Settings from './components/Options';
import Code from './components/Code';
import styles from './styles.module.scss';

interface Props {
  title: string;
  componentCode: {
    html: {
      name: string,
      content: string,
    };
    css: {
      name: string;
      content: string;
    };
    scss: {
      name: string;
      content: string;
    };
  };
  onDownload: () => void;
}

function DetailContainer({ title, componentCode, onDownload }: Props) {
  const { html, css, scss } = componentCode;
  const shadowElem = useShadow<HTMLDivElement>({ html: html.content, css: css.content });
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
        <div ref={shadowElem} />
        <div className={styles.settingsCheckbox}>
          <input type="checkbox" id="chkButton" onClick={handleClick} />
          <label htmlFor="chkButton" />
        </div>
      </div>
      {isCodeVisible ? <Code html={html.content} scss={scss.content} onDownload={onDownload} /> : <Settings />}
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
