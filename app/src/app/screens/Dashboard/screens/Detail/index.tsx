import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import { getRecipeFiles } from '~utils/queries';
import { getRecipeCode } from '~utils/recipes';
import { updateDownloadsCounter } from 'services/FirebaseService';
import { TreeEntry, FileTypes } from '~constants/interfaces/recipe';

import DetailsContainer from './layout';

const zipEntry = (zip: JSZip, entry: TreeEntry) => {
  if (entry.type === FileTypes.blob) {
    zip.file(entry.name, entry.src);
  } else {
    const newFolder = zip.folder(entry.name);
    entry.entries.forEach(newEntry => zipEntry(newFolder, newEntry));
  }
};

function Detail() {
  const { tech, category, recipe } = useParams();
  const { data, loading } = useQuery(getRecipeFiles(tech, category as string, recipe as string));
  const recipeCode = getRecipeCode(data?.repository);

  const downloadZip = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { title, config, source, ...files } = recipeCode;
    updateDownloadsCounter(tech, recipe);
    const zip = new JSZip();
    // TODO: Remove TreeEntry type once the parseTree has type checking
    source?.entries.forEach((entry: TreeEntry) => zipEntry(zip, entry));
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
