import React from 'react';

import { Recipe } from '~constants/interfaces/recipe';
import useShadow from '~hooks/useShadow';

interface Props {
  className?: string;
  recipe: Recipe;
}

function ShadowRecipe({ className = '', recipe }: Props) {
  // TODO: Update to the new files structure
  const shadowElem = useShadow<HTMLDivElement>({ html: recipe.html.content, css: recipe.css.content });
  return <div ref={shadowElem} className={`full-width row middle center ${className}`} />;
}

export default ShadowRecipe;
