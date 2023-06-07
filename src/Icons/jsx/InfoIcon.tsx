import * as React from 'react';

function SvgInfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 2a8 8 0 100 16 8 8 0 000-16zm0 7a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2z"
          id="info_icon_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <g transform="translate(2 2)">
          <mask id="info_icon_svg__b" fill="#fff">
            <use xlinkHref="#info_icon_svg__a" />
          </mask>
          <g mask="url(#info_icon_svg__b)" fill="#000" fillRule="nonzero">
            <path d="M-2-2h24v24H-2z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgInfoIcon;
