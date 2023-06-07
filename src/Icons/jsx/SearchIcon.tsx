import * as React from 'react';

function SvgSearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
          id="search_icon_svg__a"
          d="M11 3a8 8 0 016.096 13.181l3.342 3.343a1 1 0 01-1.414 1.414l-3.405-3.405A8 8 0 1111 3zm0 2a6 6 0 100 12 6 6 0 000-12z"
        />
      </defs>
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <mask id="search_icon_svg__b" fill="#fff">
          <use xlinkHref="#search_icon_svg__a" />
        </mask>
        <g mask="url(#search_icon_svg__b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgSearchIcon;
