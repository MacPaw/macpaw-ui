import * as React from 'react';

const SvgSettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
        d="M9.512.134l7.976 4.5A.996.996 0 0118 5.5v9a.996.996 0 01-.512.866l-7.976 4.5a1.044 1.044 0 01-1.024 0l-7.976-4.5A.996.996 0 010 14.5v-9c0-.357.195-.687.512-.866l7.976-4.5a1.044 1.044 0 011.024 0zM9 2L2 6v8l7 4 7-4V6L9 2zm0 4a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z"
        id="settings_icon_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <g transform="translate(3 2)">
        <mask id="settings_icon_svg__b" fill="#fff">
          <use xlinkHref="#settings_icon_svg__a" />
        </mask>
        <g mask="url(#settings_icon_svg__b)" fillRule="nonzero">
          <path d="M-3-2h24v24H-3z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgSettingsIcon;
