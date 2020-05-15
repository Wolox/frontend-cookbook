import React, { useEffect } from 'react';
import cn from 'classnames';
import Prism from 'prismjs';

import styles from './styles.module.scss';

interface Props {
  code: string;
  lang: string;
  className?: string;
}

function CodeSnippet({ code, lang, className = '' }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre id="code-container" className={cn(styles.codeSnippet, className)}>
      <code className={`language-${lang}`}>{code}</code>
    </pre>
  );
}

export default CodeSnippet;
