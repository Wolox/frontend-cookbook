import { useRef, useEffect } from 'react';

interface Props {
  html: string;
  css: string;
}

function useShadow<T extends HTMLElement>({ html, css }: Props) {
  const shadowElem = useRef<T>(null);

  useEffect(() => {
    const currentElem = shadowElem.current as HTMLElement;
    const shadowRoot = currentElem.shadowRoot || currentElem.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `${html}<style>${css}</style>`;
  }, [html, css]);

  return shadowElem;
}

export default useShadow;
