import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { getComponentFiles } from '~utils/queries';
import { getComponentCode } from '~utils/components';

import DetailsContainer from './layout';

function Detail() {
  const { category, component } = useParams();
  const { data, loading } = useQuery(getComponentFiles(category as string, component as string));
  const componentCode = getComponentCode(data?.repository);

  return <DetailsContainer loading={loading} title={component} componentCode={componentCode} />;
}

export default Detail;
