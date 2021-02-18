import * as React from 'react';

function SvgRefreshingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fillRule="evenodd" transform="matrix(1 0 0 -1 0 21)">
        <path
          fill="none"
          stroke="#000"
          strokeWidth={2}
          d="M18 6.33A8.304 8.304 0 0012.201 4C7.671 4 4 7.562 4 11.955m2 5.702A8.28 8.28 0 0011.799 20C16.329 20 20 16.418 20 12"
        />
        <path d="M0 12h8l-4 4zM24 13h-8l4-5z" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="-360 12 12"
          dur="2s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
}

export default SvgRefreshingIcon;
