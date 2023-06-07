import * as React from 'react';

const SvgCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
    <g fillRule="evenodd">
      <rect width={2} height={10} x={5.5} y={9.475} rx={1} transform="scale(-1 1) rotate(45 0 -1.218)" />
      <rect width={2} height={17} x={13.665} y={3.5} rx={1} transform="rotate(45 14.665 12)" />
    </g>
  </svg>
);

export default SvgCheckIcon;
