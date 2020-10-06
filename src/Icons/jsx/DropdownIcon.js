import * as React from 'react';

function SvgDropdownIcon(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <defs>
        <path
          id="dropdown_icon_svg__a"
          d="M19.705 7.29a1 1 0 01.004 1.415l-7.02 7.059a1 1 0 01-1.42-.002L4.29 8.703a1 1 0 011.422-1.406l6.272 6.341 6.308-6.343a1 1 0 011.414-.004z"
        />
      </defs>
      <g fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z" />
        <mask id="dropdown_icon_svg__b" fill="#fff">
          <use xlinkHref="#dropdown_icon_svg__a" />
        </mask>
        <g mask="url(#dropdown_icon_svg__b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgDropdownIcon;
