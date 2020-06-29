import React, { Suspense, lazy } from 'react';

import './styles.scss';

function App() {
  const urlParams = new URLSearchParams(window.location.search),
    category = urlParams.get('category'),
    component = urlParams.get('component');

  const CustomComponent = lazy(() => import(`../../recipes/${category}/${component}`));

  if (urlParams.get('compact') === 'true') {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <CustomComponent />
      </Suspense>
    );
  }

  return (
    <div className="row">
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
