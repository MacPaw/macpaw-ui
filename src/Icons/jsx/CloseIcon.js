import * as React from 'react';

function SvgCloseIcon(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <defs>
        <path
          d="M12 3a1 1 0 011 1v6.999L20 11a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 011-1z"
          id="close_icon_svg__a"
        />
      </defs>
      <g fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z" />
        <mask id="close_icon_svg__b" fill="#fff">
          <use xlinkHref="#close_icon_svg__a" />
        </mask>
        <g mask="url(#close_icon_svg__b)" transform="rotate(45 12 12)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgCloseIcon;
