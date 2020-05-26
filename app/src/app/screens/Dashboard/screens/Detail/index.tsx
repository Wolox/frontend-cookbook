import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import { getRecipeFiles } from '~utils/queries';
import { getRecipeCode } from '~utils/recipes';
import { useGlobalContext } from '~context/GlobalProvider';

import DetailsContainer from './layout';

function Detail() {
  const { category, recipe } = useParams();
  const {
    state: { tech }
  } = useGlobalContext();
  const { data, loading } = useQuery(getRecipeFiles(tech, category as string, recipe as string));
  const recipeCode = getRecipeCode(data?.repository);

  const downloadZip = useCallback(() => {
    const zip = new JSZip();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { title, css, config, ...files } = recipeCode;
    Object.values(files).forEach(file => {
      if (file) {
        const { name, content } = file;
        zip.file(name, content as string);
      }
    });
    zip.generateAsync({ type: 'blob' }).then(content => {
      saveAs(content, 'code.zip');
    });
  }, [recipeCode]);

  return <DetailsContainer loading={loading} title={recipe} recipe={recipeCode} onDownload={downloadZip} />;
}

export default Detail;
