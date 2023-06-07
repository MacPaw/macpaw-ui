import * as React from 'react';

function SvgLanguageNl(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={16}
      viewBox="0 0 320 240"
      {...props}
    >
      <g fill="none">
        <path fill="#AE1C28" d="M0 0h320v80H0z" />
        <path fill="#FFF" d="M0 80h320v80H0z" />
        <path fill="#21468B" d="M0 160h320v80H0z" />
      </g>
    </svg>
  );
}

export default SvgLanguageNl;
