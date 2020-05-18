import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import Loading from '../Spinner/components/loading';

function CustomSuspense({ fallback, children }) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

CustomSuspense.defaultProps = {
  fallback: <Loading />
};

CustomSuspense.propTypes = {
  fallback: PropTypes.element
};

export default CustomSuspense;
