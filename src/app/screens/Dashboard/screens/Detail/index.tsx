import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import { getComponentFiles } from '~utils/queries';
import { getComponentCode } from '~utils/components';

import DetailsContainer from './layout';

function Detail() {
  const { category, component } = useParams();
  const { data, loading } = useQuery(getComponentFiles(category as string, component as string));
  const componentCode = getComponentCode(data?.repository);
  
  const downloadZip = useCallback(() => {
    const { html, scss, css } = componentCode;
    const zip = new JSZip();
    zip.file("index.html", html as string);
    zip.file("style.scss", scss as string);
    zip.file("style.css", css as string);
    zip.generateAsync({ type: "blob" })
      .then(function (content) {
        saveAs(content, "code.zip");
      });
  }, [componentCode]);

  return <DetailsContainer loading={loading} title={component} componentCode={componentCode} onDownload={downloadZip} />;
}

export default Detail;
