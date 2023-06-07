import * as React from 'react';

function SvgWarningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={22}
      height={18}
      viewBox="0 0 22 18"
      {...props}
    >
      <defs>
        <path
          id="warning_icon_svg__a"
          d="M21.883 16.435A3 3 0 0119.323 21H4.676a3 3 0 01-2.56-4.565L9.442 4.458a3 3 0 015.118 0l7.324 11.977zM12.522 5.17a1 1 0 00-1.375.332L3.823 17.478A1 1 0 004.676 19h14.647a1 1 0 00.854-1.522L12.853 5.502a1 1 0 00-.331-.332z"
        />
      </defs>
      <g fillRule="evenodd" transform="translate(-1 -3)">
        <path fill="none" d="M0 0h24v24H0z" />
        <mask fill="#fff" id="warning_icon_svg__b">
          <use xlinkHref="#warning_icon_svg__a" />
        </mask>
        <g mask="url(#warning_icon_svg__b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgWarningIcon;
