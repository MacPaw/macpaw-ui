import * as React from 'react';

const SvgCopyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path
      fillRule="nonzero"
      d="M18 2a3 3 0 012.995 2.824L21 5v10a3 3 0 01-2.824 2.995L18 18h-1v1a3 3 0 01-2.824 2.995L14 22H6a3 3 0 01-3-3V9a3 3 0 013-3h1V5a3 3 0 012.824-2.995L10 2h8zm-4 6H6a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V9a1 1 0 00-1-1zm4-4h-8a1 1 0 00-.993.883L9 5v1h5a3 3 0 012.995 2.824L17 9v7h1a1 1 0 00.993-.883L19 15V5a1 1 0 00-.883-.993L18 4z"
    />
  </svg>
);

export default SvgCopyIcon;
