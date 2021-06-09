import bing from 'bing-translate-result';
import React from 'react';

import { useGlobals } from '../contexts/Global';

function translate({
  text = '',
  onTranslated = (str) => {
    console.log(str);
  },
}) {
  const [{ language }] = useGlobals();

  React.useEffect(() => {
    _t(text);
    // console.log(text);
  });

  const _t = async (text) => {
    const tr = await bing
      .translate({
        text,
        // from: 'us',
        to: language,
      })
      .then((result) => {
        return result.result[0];
      })
      .catch((err) => {
        return text;
      });
    onTranslated(tr);
  };

  return <></>;
}

export default translate;
