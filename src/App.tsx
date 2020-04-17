import React, { Suspense, lazy } from 'react';

import './styles.scss';

function App() {
  const urlParams = new URLSearchParams(window.location.search),
        category = urlParams.get('category'),
        component = urlParams.get('component');

  const CustomComponent = lazy(() => import(`../components/${category}/${component}/react`));

  return (
    <>
      <p className="explanation">The component in the container is how it will be seen in the app</p>
      <Suspense fallback={<div>Loading...</div>}>
        <CustomComponent />
      </Suspense>
    </>
  );
}

export default App;
