import React from 'react';

import { Recipe } from '~constants/interfaces/component';
import useShadow from '~hooks/useShadow';

interface Props {
  className: string;
  component: Recipe;
}

function ShadowComponent({ className, component }: Props) {
  const shadowElem = useShadow<HTMLDivElement>({ html: component.html.content, css: component.css.content });
  return <div ref={shadowElem} className={`full-width row middle center ${className}`} />;
}

export default ShadowComponent;
