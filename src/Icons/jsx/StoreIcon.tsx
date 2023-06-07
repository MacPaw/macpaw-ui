import * as React from 'react';

const SvgStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
        id="store_icon_svg__a"
        d="M7 7a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1H7zm5-5a4.002 4.002 0 013.874 3H17a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V8a3 3 0 013-3h1.126C8.57 3.275 10.136 2 12 2zm0 2a2 2 0 00-1.732 1h3.464A2 2 0 0012 4z"
      />
    </defs>
    <g fillRule="evenodd">
      <path fill="none" d="M0 0h24v24H0z" />
      <mask id="store_icon_svg__b" fill="#fff">
        <use xlinkHref="#store_icon_svg__a" />
      </mask>
      <g mask="url(#store_icon_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgStoreIcon;
