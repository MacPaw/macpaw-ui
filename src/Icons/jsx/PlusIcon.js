import * as React from 'react';

function SvgPlusIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fillRule="nonzero"
          d="M12 3a1 1 0 011 1v6.999L20 11a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 011-1z"
        />
      </g>
    </svg>
  );
}

export default SvgPlusIcon;
