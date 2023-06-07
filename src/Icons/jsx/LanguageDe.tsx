import * as React from 'react';

function SvgLanguageDe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={16}
      viewBox="0 0 320 240"
      {...props}
    >
      <g fill="none">
        <path fill="#FFCE00" d="M0 160.333h320V240.5H0z" />
        <path fill="#000" d="M0 0h320v80.166H0z" />
        <path fill="#D00" d="M0 80.166h320v80.167H0z" />
      </g>
    </svg>
  );
}

export default SvgLanguageDe;
