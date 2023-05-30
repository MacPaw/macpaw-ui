import * as React from 'react';

const SvgBusinessIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M13 3a3 3 0 013 3v1h2a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3v-8a3 3 0 013-3h2V6a3 3 0 013-3zm-3 6H6a1 1 0 00-1 1v1h14v-1a1 1 0 00-1-1h-4zm4-2h-4V6a1 1 0 011-1h2a1 1 0 011 1zm5 6h-6a1 1 0 110 2h-2a1 1 0 110-2H5v5a1 1 0 001 1h12a1 1 0 001-1z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgBusinessIcon;
