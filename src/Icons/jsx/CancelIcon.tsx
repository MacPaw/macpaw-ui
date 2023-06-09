import * as React from 'react';

const SvgCancelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fillRule="evenodd">
      <circle cx={12} cy={12} r={10} />
      <rect fill="#fff" transform="rotate(45 12 12)" x={11} y={6} width={2} height={12} rx={1} />
      <rect fill="#fff" transform="scale(-1 1) rotate(45 0 -16.97)" x={11} y={6} width={2} height={12} rx={1} />
    </g>
  </svg>
);

export default SvgCancelIcon;
