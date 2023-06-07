import * as React from 'react';

const SvgPauseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fillRule="evenodd">
      <circle cx={12} cy={12} r={10} />
      <path fill="#fff" d="M9 7h2v10H9zm4 0h2v10h-2z" />
    </g>
  </svg>
);

export default SvgPauseIcon;
