import React, { useState } from 'react';
import cn from 'classnames';

import CodeSnippet from '~components/CodeSnippet';
import Tree from '~components/Tree';
import { SelectedFile } from '~constants/interfaces/recipe';

import { CODE } from './constants';
import styles from './styles.module.scss';

interface Props {
  html: string;
  scss: string;
  readme: string;
  onDownload: () => void;
  // code: string;
  // name: string;
  // lang: string;
}

function Code({ html, scss, readme, onDownload }: Props) {
  const [currentCode, setCurrentCode] = useState<CODE>(CODE.HTML);
  const [fileData, setFileData] = useState<{ name: string; code: string; lang: string }>({
    name: '',
    code: '',
    lang: ''
  });
  const handleFileSelect = (data: SelectedFile) => {
    setFileData(data);
  };

  const isHtml = currentCode === CODE.HTML;
  const isScss = currentCode === CODE.SCSS;
  const isReadme = currentCode === CODE.README;

  const handleHtmlClick = () => setCurrentCode(CODE.HTML);
  const handleScssClick = () => setCurrentCode(CODE.SCSS);
  const handleReadmeClick = () => setCurrentCode(CODE.README);

  return (
    <div className={styles.filesStructureContainer}>
      <div className={styles.header}>
        <div className={styles['download-container']}>
          <button
            className={`${styles.downloadButton} ${styles.codeTypeButton}`}
            type="button"
            onClick={onDownload}
          >
            Download code
          </button>
        </div>
        <h3 className={styles['file-name']}>{fileData.name}</h3>
      </div>
      <div className={styles.codeContainer}>
        <Tree handleSelect={handleFileSelect} />
        <div className={styles.codeSnippets}>
          <CodeSnippet
            className={`${styles.code} ${styles.codeVisible}`}
            code={fileData.code}
            lang={fileData.lang}
          />

          {/* <CodeSnippet className={cn(styles.code, { [styles.codeVisible]: isHtml })} code={html} lang="html" />

          <CodeSnippet className={cn(styles.code, { [styles.codeVisible]: isScss })} code={scss} lang="scss" />

          <CodeSnippet
            className={cn(styles.code, { [styles.codeVisible]: isReadme })}
            code={readme}
            lang="text/plain"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Code;
