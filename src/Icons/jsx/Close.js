import * as React from 'react';

function SvgClose(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="#000" {...props}>
      <defs>
        <path
          d="M12 3a1 1 0 011 1v6.999L20 11a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 011-1z"
          id="a"
        />
      </defs>
      <g fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z" />
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <g mask="url(#b)" transform="rotate(45, 12, 12)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgClose;
