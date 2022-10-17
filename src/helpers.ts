import { KeyboardEvent } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const uniqId = () => {
  const array = new Uint32Array(10);

  window.crypto.getRandomValues(array);

  return (
    Date.now().toString(36)
      + Array.from(array)
        .map((number) => number.toString(36))
        .join('')
  ).replace(/\./g, '');
};


export const isAutofill = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Unidentified' && e.code === undefined && e.view === undefined;
