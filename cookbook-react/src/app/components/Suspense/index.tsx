import React, { Suspense } from 'react';

import Loading from '../../../recipes/spinners/SpinkitSpinner';

interface Props {
  fallback?: React.ElementType;
  children: React.ReactNode;
}

function CustomSuspense({ fallback: Fallback = Loading, children }: Props) {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
}

export default CustomSuspense;
