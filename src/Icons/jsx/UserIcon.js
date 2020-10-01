import * as React from 'react';

function SvgUserIcon(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <defs>
        <path
          d="M9 0a5 5 0 013.401 8.665A9.002 9.002 0 0118 17a1 1 0 01-.997 1c-1.404.004-3.704.005-6.94.004h-2.28l-.367-.001H5.78L1.224 18H1a1 1 0 01-1-1 9.003 9.003 0 015.6-8.335A5 5 0 019 0zm.023 9.999L9 10h-.023a7.002 7.002 0 00-6.906 6l3.711.002 2.001.001 2.39.001 5.176-.001h.58A7.002 7.002 0 009 10l.023-.001zM9.02 8l.156-.005A3 3 0 109 8l-.02-.001.04.001z"
          id="user_icon_svg__a"
        />
      </defs>
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <g transform="translate(3 3)">
          <mask id="user_icon_svg__b" fill="#fff">
            <use xlinkHref="#user_icon_svg__a" />
          </mask>
          <g mask="url(#user_icon_svg__b)" fillRule="nonzero">
            <path d="M-3-3h24v24H-3z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgUserIcon;
