import * as React from 'react';

const SvgCloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
    <g fillRule="evenodd">
      <path fill="none" d="M0 0h24v24H0z" />
      <rect width={2} height={18} x={11} y={3} fillRule="nonzero" rx={1} transform="rotate(45 12 12)" />
      <rect width={2} height={18} x={11} y={3} fillRule="nonzero" rx={1} transform="rotate(-45 12 12)" />
    </g>
  </svg>
);

export default SvgCloseIcon;
