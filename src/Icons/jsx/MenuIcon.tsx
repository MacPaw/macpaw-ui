import * as React from 'react';

function SvgMenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <path
          id="menu_icon_svg__a"
          d="M19 17a1 1 0 010 2H5a1 1 0 010-2h14zm0-6a1 1 0 010 2H5a1 1 0 010-2h14zm0-6a1 1 0 010 2H5a1 1 0 110-2h14z"
        />
      </defs>
      <g fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z" />
        <mask id="menu_icon_svg__b" fill="#fff">
          <use xlinkHref="#menu_icon_svg__a" />
        </mask>
        <g mask="url(#menu_icon_svg__b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgMenuIcon;
