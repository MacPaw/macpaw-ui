import * as React from 'react';

const SvgMoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24} {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
  </svg>
);

export default SvgMoreIcon;
