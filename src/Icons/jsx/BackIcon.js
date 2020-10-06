import * as React from 'react';

function SvgBackIcon(props) {
  return (
    <svg width={15} height={16} viewBox="0 0 15 16" {...props}>
      <defs>
        <path
          id="back_icon_svg__a"
          d="M11.353 4.29a1 1 0 011.41 1.42l-5.345 5.315h10.608a1 1 0 01.993.884l.007.117a1 1 0 01-1 1l-10.587-.001 5.323 5.264a1 1 0 01.09 1.32l-.083.094a1 1 0 01-1.414.008l-6.994-6.916a1 1 0 01-.344-.587c0-.008-.002-.015-.003-.023a.89.89 0 01-.014-.16l.004.081a1.006 1.006 0 01-.004-.06v-.02a1.02 1.02 0 01.004-.1l.005-.037a.99.99 0 01.286-.579z"
        />
      </defs>
      <g fillRule="evenodd" transform="translate(-4 -4)">
        <path fill="none" d="M24 0H0v24h24z" />
        <mask id="back_icon_svg__b" fill="#fff">
          <use xlinkHref="#back_icon_svg__a" />
        </mask>
        <g mask="url(#back_icon_svg__b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgBackIcon;
