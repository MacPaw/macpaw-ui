import { KeyboardEvent } from 'react';

export const uniqId = () => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const array = new Uint32Array(10);

  window.crypto.getRandomValues(array);

  return (
    (
      Date.now()
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        .toString(36) +
      Array.from(array)
        .map((number) =>
          number
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            .toString(36),
        )
        .join('')
    ).replace(/\./g, '')
  );
};

export const isAutofill = (e: KeyboardEvent<HTMLInputElement>) =>
  // eslint-disable-next-line no-undefined
  e.key === 'Unidentified' && e.code === undefined && e.view === undefined;
