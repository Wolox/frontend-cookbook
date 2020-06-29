import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import CodeSnippet from '~components/CodeSnippet';
import Tree from '~components/Tree';
import { SelectedFile, TreeRecipe } from '~constants/interfaces/recipe';

import styles from './styles.module.scss';

interface Props {
  onDownload: () => void;
  source: TreeRecipe;
}

const defaultSelectedFile = {
  name: '',
  src: '',
  lang: '',
  isBinary: false
};

function Code({ source, onDownload }: Props) {
  const [fileData, setFileData] = useState<SelectedFile>(defaultSelectedFile);
  const handleFileSelect = (data: SelectedFile = defaultSelectedFile) => {
    setFileData(data);
  };

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
        <Tree handleSelect={handleFileSelect} source={source} />
        <div className={styles.codeSnippets}>
          {fileData.lang === 'md' ? (
            <ReactMarkdown className="full-width column" source={fileData.src} />
          ) : (
            <CodeSnippet
              className={`${styles.code} ${styles.codeVisible}`}
              code={fileData.isBinary ? 'Archivo no soportado' : fileData.src}
              lang={fileData.lang}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Code;
