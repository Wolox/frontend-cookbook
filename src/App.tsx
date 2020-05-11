import React, { Suspense, lazy } from 'react';

import './scss/layout.scss';
import './styles.scss';

const CATEGORIES = [
  { name: 'buttons', components: ['button-1'] },
  { name: 'signin', components: ['simple'] }
];


function App() {
  const urlParams = new URLSearchParams(window.location.search),
        category = urlParams.get('category'),
        component = urlParams.get('component');

  const CustomComponent = lazy(() => import(`../components/${category}/${component}`));

  if (urlParams.get('compact') === 'true') { 
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <CustomComponent />
      </Suspense>
    ); 
  }

  return (
    <div className="row">
      <ul>
        {CATEGORIES.map(({ name, components }) => (
          <>
            <li>{name}</li>
            <ul>
              {components.map((component) => (
                <li>
                  <a href={`/?category=${name}&component=${component}`}>{component}</a>
                </li>
              ))}
            </ul>
          </>
        ))}
      </ul>
      <div>
        <p className="explanation">The component in the container is how it will be seen in the app</p>
        <Suspense fallback={<div>Loading...</div>}>
          <CustomComponent />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
