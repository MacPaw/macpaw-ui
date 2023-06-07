import * as React from 'react';

function SvgLanguageUk(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={16}
      viewBox="0 0 320 240"
      {...props}
    >
      <g fill="none">
        <path fill="#005BBB" d="M0 0h320v120H0z" />
        <path fill="#FFD500" d="M0 120h320v120H0z" />
      </g>
    </svg>
  );
}

export default SvgLanguageUk;
