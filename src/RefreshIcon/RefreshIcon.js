import React from 'react';

const Loader = ({ size = 24 }) => (
  <div className="loader">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 18"
    >
      <g fill="none" fillRule="evenodd" transform="matrix(1 0 0 -1 0 21)">
        <path
          stroke="#000"
          strokeWidth="2"
          d="M18,6.32997724 C16.5159091,4.89039817 14.4656565,4 12.2010101,4 C7.6717173,4 4,7.56159268 4,11.9550399 M6,17.6568542 C7.48409093,19.1045695 9.53434346,20 11.7989899,20 C16.3282827,20 20,16.418278 20,12"
        />
        <polygon fill="#000" points="0 12 4 12 8 12 4 16" />
        <polygon
          fill="#000"
          points="16 8 20 8 24 8 20 13"
          transform="rotate(-180 20 10.5)"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="2s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  </div>
);

export default Loader;
