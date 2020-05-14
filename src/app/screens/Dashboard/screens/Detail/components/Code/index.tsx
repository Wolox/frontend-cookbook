import React, { useState } from 'react';
import cn from 'classnames';

import CodeSnippet from '~components/CodeSnippet';

import { CODE } from './constants';
import styles from './styles.module.scss';

interface Props {
  html: string;
  scss: string;
  onDownload: () => void;
}

function Code({ html, scss, onDownload }: Props) {
  const [currentCode, setCurrentCode] = useState<CODE>(CODE.HTML);
  const isHtml = currentCode === CODE.HTML;
  const isScss = currentCode === CODE.SCSS;

  const handleHtmlClick = () => setCurrentCode(CODE.HTML);
  const handleScssClick = () => setCurrentCode(CODE.SCSS);

  return (
    <div className={styles.codeContainer}>
      <div className="row space-between m-bottom-4">
        <div>
          <button
            className={cn(styles.codeTypeButton, { [styles.buttonActive]: isHtml })}
            type="button"
            onClick={handleHtmlClick}
          >
            HTML
          </button>
          <button
            className={cn(styles.codeTypeButton, { [styles.buttonActive]: isScss })}
            type="button"
            onClick={handleScssClick}
            value="SCSS"
          >
            SCSS
          </button>
        </div>
        <button
          className={`${styles.downloadButton} ${styles.codeTypeButton}`}
          type="button"
          onClick={onDownload}
        >
          Download code
        </button>
      </div>
      <div className={styles.codeSnippets}>
        <CodeSnippet className={cn(styles.code, { [styles.codeVisible]: isHtml })} code={html} lang="html" />
        <CodeSnippet className={cn(styles.code, { [styles.codeVisible]: isScss })} code={scss} lang="scss" />
      </div>
    </div>
  );
}

export default Code;
