import * as React from 'react';

const SvgExternalIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path
      fillRule="nonzero"
      d="M11 4v2H7a1 1 0 00-.993.883L6 7v10a1 1 0 00.883.993L7 18h10a1 1 0 00.993-.883L18 17v-4h2v4a3 3 0 01-2.824 2.995L17 20H7a3 3 0 01-2.995-2.824L4 17V7a3 3 0 012.824-2.995L7 4h4zm9 0v6l-2.293-2.293-6 6-1.414-1.414 5.999-6.001L14 4h6z"
    />
  </svg>
);

export default SvgExternalIcon;
